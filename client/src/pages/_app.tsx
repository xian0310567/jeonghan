import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/layout/Layout";
import Container from "@/components/atoms/Container/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  );
}
