import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const app: Express = express();
const port = 5000;

app.post("/", async (req: Request, res: Response) => {
  const createUser = await prisma.user.create({
    data: {
      email: "as1df@asdf.com",
      name: "이정한1"
    }
  })
  res.send({createUser});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
