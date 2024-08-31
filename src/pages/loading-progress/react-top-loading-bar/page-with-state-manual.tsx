import { useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';

import Footer from '../../../layouts/Footer';
import Header from '../../../layouts/Header';

const IndexPage: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color="rgb(180, 130, 251)"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="flex flex-col h-screen">
        <Header
          title={`react-top-loading-bar (with State - Manual) (Page ${
            query.page || ''
          })`}
          description="A very simple, highly customisable youtube-like react loader component."
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
              <li>
                <Link
                  href="/loading-progress/react-top-loading-bar"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Loading Progress (react-top-loading-bar)
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
                  href="#"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  onClick={() => {
                    let progress_new = progress + 10;
                    if (progress_new > 100) {
                      progress_new = 100;
                    }
                    setProgress(progress_new);
                  }}
                >
                  Add 10%
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  onClick={() => {
                    let progress_new = progress + 20;
                    if (progress_new > 100) {
                      progress_new = 100;
                    }
                    setProgress(progress_new);
                  }}
                >
                  Add 20%
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  onClick={() => {
                    let progress_new = progress - 10;
                    if (progress_new <= 0) {
                      progress_new = 1;
                    }
                    setProgress(progress_new);
                  }}
                >
                  Decrease 10%
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  onClick={() => {
                    let progress_new = progress - 20;
                    if (progress_new <= 0) {
                      progress_new = 1;
                    }
                    setProgress(progress_new);
                  }}
                >
                  Decrease 20%
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  onClick={() => setProgress(100)}
                >
                  Complete
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
              react-top-loading-bar:
              <br />
              <a
                href="https://klendi.github.io/react-top-loading-bar"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                https://klendi.github.io/react-top-loading-bar
              </a>
            </li>
            <li>
              react-top-loading-bar (Github):
              <br />
              <a
                href="https://github.com/klendi/react-top-loading-bar"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                https://github.com/klendi/react-top-loading-bar
              </a>
            </li>
          </ol>
        </Footer>
      </div>
    </>
  );
};

export default IndexPage;
