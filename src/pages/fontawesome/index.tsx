import type { NextPage } from 'next';
import Link from 'next/link';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Font Awesome"
        description="Font Awesome is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators."
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
                href="/fontawesome/fontawesome-individually"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Font Awesome (Individually)
              </Link>
            </li>
            <li>
              <Link
                href="/fontawesome/fontawesome-dynamically"
                className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Font Awesome (Dynamically)
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
            Font Awesome:
            <br />
            <a
              href="https://fontawesome.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://fontawesome.com
            </a>
          </li>
          <li>
            Font Awesome (Add Icons with React):
            <br />
            <a
              href="https://fontawesome.com/docs/web/use-with/react/add-icons"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://fontawesome.com/docs/web/use-with/react/add-icons
            </a>
          </li>
          <li>
            Font Awesome (Import Icons):
            <br />
            <a
              href="https://fontawesome.com/docs/apis/javascript/import-icons"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://fontawesome.com/docs/apis/javascript/import-icons
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
