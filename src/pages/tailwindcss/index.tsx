import type { NextPage } from 'next';
import Link from 'next/link';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Tailwind CSS"
        description="Tailwind CSS is a framework like no other. Rather than constraining you to a set design, it gives you the tools and the standardization to build exactly what you want."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col pt-5 pb-10 px-10 md:px-16"
      >
        <article>
          <ol
            style={{
              listStyleType: 'number',
            }}
          >
            <li>
              <Link
                href="/tailwindcss/tailwindcss"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Tailwind CSS
              </Link>
            </li>
            <li>
              <Link
                href="/tailwindcss/tailwind-styled-components"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Tailwind-Styled-Component
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
            Tailwind CSS:
            <br />
            <a
              href="https://tailwindcss.com/docs/utility-first"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://tailwindcss.com/docs/utility-first
            </a>
          </li>
          <li>
            Tailwind CSS (GitHub):
            <br />
            <a
              href="https://github.com/tailwindlabs/tailwindcss"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/tailwindlabs/tailwindcss
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
