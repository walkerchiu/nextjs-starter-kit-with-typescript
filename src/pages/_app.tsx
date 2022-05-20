import '../app/styles/globals.css';
import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import SEO from '../../next-seo.config';
import NProgress from 'nprogress';
import '../app/styles/nprogress.css';
import { appWithTranslation } from "next-i18next";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from "next-themes";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

config.autoAddCss = false;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: any) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <React.Fragment>
      <DefaultSeo
        {...SEO}
        dangerouslySetAllPagesToNoFollow={
          router.pathname === '/dangerously/nofollow' ||
          router.pathname === '/dangerously/nofollow-and-noindex'
        }
        dangerouslySetAllPagesToNoIndex={
          router.pathname === '/dangerously/noindex' ||
          router.pathname === '/dangerously/nofollow-and-noindex'
        }
      />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default appWithTranslation(MyApp);
