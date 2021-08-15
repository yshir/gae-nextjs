import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { SITE_NAME } from '@src/consts';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
