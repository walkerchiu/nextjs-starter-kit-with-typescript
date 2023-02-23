import type { NextPage } from "next";
import Link from "next/link";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook"
        description="Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
      />
      <main id="main" className="flex w-full flex-1 flex-col pt-5 pb-10 px-16">
        <article>
          <ol
            style={{
              listStyleType: "number",
            }}
          >
            <li>
              <Link href="/react-hook/useCallback">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useCallback
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useEffect">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useEffect
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useEffect-clsss-component">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useEffect (Class Component)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useEffect-function-component">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useEffect (Function Component)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useEffect-class-component2">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useEffect (Class Component 2)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useEffect-function-component2">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useEffect (Function Component 2)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useEffect-carousel">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useEffect (Carousel)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useLayoutEffect">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useLayoutEffect
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useLayoutEffect-carousel">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useLayoutEffect (Carousel)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useMemo">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useMemo
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useRef">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useRef
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useRef-forwardRef">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useRef (Exposing a ref to your own component)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useRef-counter">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useRef (Counter)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useRef-stopwatch">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useRef (StopWatch)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useRef-video">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useRef (Video)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useState">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useState
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useState-clsss-component">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useState (Class Component)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/react-hook/useState-function-component">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  useState (Function Component)
                </a>
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
            Introducing Hooks:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-intro.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-intro.html
            </a>
          </li>
          <li>
            Hooks at a Glance:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-overview.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-overview.html
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
