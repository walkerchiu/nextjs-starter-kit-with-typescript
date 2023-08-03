import type { NextPage } from "next";
import Link from "next/link";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="csrf"
        description="What are CSRF tokens and how do they work?"
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col pt-5 pb-10 px-10 md:px-16"
      >
        <article>
          <ol
            style={{
              listStyleType: "number",
            }}
          >
            <li>
              <Link
                href="/csrf/csrf"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                csrf
              </Link>
            </li>
            <li>
              <Link
                href="/csrf/next-csrf"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                next-csrf
              </Link>
            </li>
            <li>
              <Link
                href="/csrf/next-csrf-form"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                next-csrf (Form)
              </Link>
            </li>
          </ol>
        </article>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            csrf (GitHub):
            <br />
            <a
              href="https://github.com/pillarjs/csrf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/pillarjs/csrf
            </a>
          </li>
          <li>
            next-csrf (GitHub):
            <br />
            <a
              href="https://github.com/j0lv3r4/next-csrf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/j0lv3r4/next-csrf
            </a>
          </li>
          <li>
            Understanding CSRF:
            <br />
            <a
              href="https://github.com/pillarjs/understanding-csrf#csrf-tokens"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/pillarjs/understanding-csrf#csrf-tokens
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
