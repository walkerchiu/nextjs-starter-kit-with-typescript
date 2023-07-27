import type { NextPage } from "next";
import Link from "next/link";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="dnd-kit"
        description="A lightweight, performant, accessible and extensible drag & drop toolkit for React."
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
                href="/dnd-kit/dnd-kit-draggable-and-droppable"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Draggable and Droppable
              </Link>
            </li>
            <li>
              <Link
                href="/dnd-kit/dnd-kit-sortable-tree"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Sortable Tree
              </Link>
            </li>
            <li>
              <Link
                href="/dnd-kit/dnd-kit-sortable-tree-with-overlay"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Sortable Tree with Overlay
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
            dnd-kit:
            <br />
            <a
              href="https://dndkit.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://dndkit.com
            </a>
          </li>
          <li>
            dnd-kit (Quick start):
            <br />
            <a
              href="https://docs.dndkit.com/introduction/getting-started"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://docs.dndkit.com/introduction/getting-started
            </a>
          </li>
          <li>
            dnd-kit (GitHub):
            <br />
            <a
              href="https://github.com/clauderic/dnd-kit"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/clauderic/dnd-kit
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
