import type { NextPage } from 'next';
import Link from 'next/link';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="react-select"
        description="A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support."
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
                href="/react-select/basic"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Basic)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/grouped"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Grouped)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/animated-components"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Animated Components)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/custom-styles-single"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Custom Styles: Single)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/custom-styles-multi-select"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Custom Styles: Multi Select)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/async-callback"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Async: Callback)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/async-promises"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Async: Promises)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/creatable-single"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Creatable: Single)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/creatable-multi-select"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Creatable: Multi Select)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/creatable-multi-select-with-text-input"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Creatable: Multi Select with Text Input)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/creatable-async"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Creatable: Async)
              </Link>
            </li>
            <li>
              <Link
                href="/react-select/fixed-options"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                react-select (Fixed Options)
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
            react-select:
            <br />
            <a
              href="https://react-select.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://react-select.com
            </a>
          </li>
          <li>
            react-select (GitHub):
            <br />
            <a
              href="https://github.com/jedwatson/react-select"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/jedwatson/react-select
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
