import type { NextPage } from 'next';
import Link from 'next/link';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Sass & Scss"
        description="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."
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
                href="/sass-scss/sass"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Sass
              </Link>
            </li>
            <li>
              <Link
                href="/sass-scss/scss"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Scss
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
            Sass (Learn Sass):
            <br />
            <a
              href="https://sass-lang.com/guide"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://sass-lang.com/guide
            </a>
          </li>
          <li>
            Sass (Documentation):
            <br />
            <a
              href="https://sass-lang.com/documentation"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://sass-lang.com/documentation
            </a>
          </li>
          <li>
            Sass (Playground):
            <br />
            <a
              href="https://sass-lang.com/playground"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://sass-lang.com/playground
            </a>
          </li>
          <li>
            Sass (GitHub):
            <br />
            <a
              href="https://github.com/sass/sass"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/sass/sass
            </a>
          </li>
          <li>
            What is the difference between SCSS and SASS ?:
            <br />
            <a
              href="https://www.geeksforgeeks.org/what-is-the-difference-between-scss-and-sass"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://www.geeksforgeeks.org/what-is-the-difference-between-scss-and-sass
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
