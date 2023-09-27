FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG DATABASE_URL
ARG NEXT_PUBLIC_BASE_URL_LOCAL

ARG S3_UPLOAD_KEY
ARG S3_UPLOAD_SECRET
ARG S3_UPLOAD_BUCKET
ARG S3_UPLOAD_REGION

# --- 

ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_PUBLIC_BASE_URL_LOCAL=$NEXT_PUBLIC_BASE_URL_LOCAL

ENV S3_UPLOAD_KEY=$S3_UPLOAD_KEY
ENV S3_UPLOAD_SECRET=$S3_UPLOAD_SECRET
ENV S3_UPLOAD_BUCKET=$S3_UPLOAD_BUCKET
ENV S3_UPLOAD_REGION=$S3_UPLOAD_REGION

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npx prisma generate
RUN yarn build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --chown=nextjs:nodejs prisma ./prisma/
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]