import { useEffect } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import Footer from '../../../layouts/Footer';
import Header from '../../../layouts/Header';
import '../../../app/styles/nprogress.css';

const IndexPage: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <div className="flex flex-col h-screen">
      <Header
        title={`NProgress.js (Page ${query.page || ''})`}
        description="A nanoscopic progress bar. Featuring realistic trickle animations to convince your users that something is happening!"
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col pt-5 pb-10 px-10 md:px-16"
      >
        <article>
          <ol
            style={{
              listStyleType: 'disc',
            }}
          >
            <li>
              <Link
                href="/loading-progress"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Loading Progress
              </Link>
            </li>
          </ol>
        </article>
        <article className="mt-5">
          <ol
            style={{
              listStyleType: 'number',
            }}
          >
            <li>
              <Link
                href="/loading-progress/nprogress/page?page=1"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Page 1
              </Link>
            </li>
            <li>
              <Link
                href="/loading-progress/nprogress/page?page=2"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Page 2
              </Link>
            </li>
          </ol>
        </article>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: 'number',
          }}
        >
          <li>
            NProgress.js:
            <br />
            <a
              href="https://rstacruz.github.io/nprogress"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://rstacruz.github.io/nprogress
            </a>
          </li>
          <li>
            NProgress.js (Github):
            <br />
            <a
              href="https://github.com/rstacruz/nprogress"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/rstacruz/nprogress
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
