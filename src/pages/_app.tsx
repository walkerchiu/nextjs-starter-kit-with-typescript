import type { ReactElement } from "react";
import React, { useEffect, useState } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import LoadingBar from "react-top-loading-bar";

import "../app/styles/globals.css";
import "../app/styles/tailwindcss.css";
import SEO from "../../next-seo.config";

config.autoAddCss = false;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  const isNotSamplePage = router.pathname.includes("/loading-progress");

  return getLayout(
    <React.Fragment>
      <DefaultSeo
        {...SEO}
        dangerouslySetAllPagesToNoFollow={
          router.pathname === "/dangerously/nofollow" ||
          router.pathname === "/dangerously/nofollow-and-noindex"
        }
        dangerouslySetAllPagesToNoIndex={
          router.pathname === "/dangerously/noindex" ||
          router.pathname === "/dangerously/nofollow-and-noindex"
        }
      />
      <ThemeProvider attribute="class">
        {!isNotSamplePage && (
          <LoadingBar
            color="rgb(180, 130, 251)"
            progress={progress}
            waitingTime={400}
            onLoaderFinished={() => {
              setProgress(0);
            }}
          />
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default appWithTranslation(MyApp);
