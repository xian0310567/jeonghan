import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import Layout from "@/components/layout/Layout";
import Container from "@/components/atoms/Container/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>jeonghan_log :: 좋아하는것을 나답게</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </>
  );
}
