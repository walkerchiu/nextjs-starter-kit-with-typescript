import type { NextPage } from "next";
import Link from "next/link";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="XState"
        description="JavaScript and TypeScript finite state machines and statecharts for the modern web."
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
                href="/xstate/xstate"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                XState
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
            Introduction to state machines and statecharts:
            <br />
            <a
              href="https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts
            </a>
          </li>
          <li>
            Using TypeScript with XState:
            <br />
            <a
              href="https://xstate.js.org/docs/guides/typescript.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://xstate.js.org/docs/guides/typescript.html
            </a>
          </li>
          <li>
            XState (GitHub):
            <br />
            <a
              href="https://github.com/statelyai/xstate"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/statelyai/xstate
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
