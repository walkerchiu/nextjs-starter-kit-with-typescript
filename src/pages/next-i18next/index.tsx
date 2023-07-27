import type { NextPage } from "next";
import Link from "next/link";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="next-i18next"
        description="The easiest way to translate your NextJs apps."
      />
      <main id="main" className="flex w-full flex-1 flex-col pt-5 pb-10 px-16">
        <article>
          <ol
            style={{
              listStyleType: "number",
            }}
          >
            <li>
              <Link
                href="/next-i18next/next-i18next-page1"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                next-i18next
              </Link>
            </li>
          </ol>
        </article>
        <article className="mt-5">
          <ul
            style={{
              listStyleType: "disc",
            }}
          >
            <li>
              <Link
                href="/next-i18next/locale-in-navigator"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Locale in Navigator
              </Link>
            </li>
          </ul>
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
            next-i18next:
            <br />
            <a
              href="https://next.i18next.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://next.i18next.com
            </a>
          </li>
          <li>
            next-i18next (GitHub):
            <br />
            <a
              href="https://github.com/isaachinman/next-i18next"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/isaachinman/next-i18next
            </a>
          </li>
          <li>
            Accessing the locale information:
            <br />
            <a
              href="https://nextjs.org/docs/pages/building-your-application/routing/internationalization#accessing-the-locale-information"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://nextjs.org/docs/pages/building-your-application/routing/internationalization#accessing-the-locale-information
            </a>
          </li>
          <li>
            Navigator: languages property:
            <br />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
