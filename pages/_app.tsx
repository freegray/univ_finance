// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>대시보드 애플리케이션</title>
        <meta name="description" content="데이터 분석 및 대시보드 애플리케이션입니다." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

