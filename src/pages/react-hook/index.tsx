import type { NextPage } from 'next';
import Link from 'next/link';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook"
        description="Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
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
                href="/react-hook/useCallback"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useCallback
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useCallback-dependencies"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useCallback (Dependencies)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useEffect"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useEffect
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useEffect-clsss-component"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useEffect (Class Component)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useEffect-function-component"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useEffect (Function Component)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useEffect-class-component2"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useEffect (Class Component 2)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useEffect-function-component2"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useEffect (Function Component 2)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useEffect-carousel"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useEffect (Carousel)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useInsertionEffect"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useInsertionEffect
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useInsertionEffect-CSS-in-JS"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useInsertionEffect (CSS in JS)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useLayoutEffect"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useLayoutEffect
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useLayoutEffect-carousel"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useLayoutEffect (Carousel)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useLayoutEffect-emotion-styled-component"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useLayoutEffect (Emotion styled component)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useMemo"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useMemo
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useRef"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useRef
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useRef-forwardRef"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useRef (Exposing a ref to your own component)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useRef-counter"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useRef (Counter)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useRef-stopwatch"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useRef (StopWatch)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useRef-video"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useRef (Video)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useState"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useState
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useState-clsss-component"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useState (Class Component)
              </Link>
            </li>
            <li>
              <Link
                href="/react-hook/useState-function-component"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                useState (Function Component)
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
