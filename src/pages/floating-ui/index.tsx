import type { NextPage } from "next";
import Link from "next/link";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Floating UI"
        description="Floating UI is a low-level toolkit to create floating elements. Tooltips, popovers, dropdowns, menus, and more."
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
                href="/floating-ui/floating-ui-tooltip"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Floating UI (Tooltip)
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
            Floating UI:
            <br />
            <a
              href="https://floating-ui.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://floating-ui.com
            </a>
          </li>
          <li>
            Floating UI (Tutorial):
            <br />
            <a
              href="https://floating-ui.com/docs/tutorial"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://floating-ui.com/docs/tutorial
            </a>
          </li>
          <li>
            Floating UI (GitHub):
            <br />
            <a
              href="https://github.com/floating-ui/floating-ui"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/floating-ui/floating-ui
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
