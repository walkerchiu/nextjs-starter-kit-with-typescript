import type { NextPage } from "next";
import Link from "next/link";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="apollo-client"
        description="A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server."
      />
      <main id="main" className="flex w-full flex-1 flex-col pt-5 pb-10 px-16">
        <article>
          <ol
            style={{
              listStyleType: "number",
            }}
          >
            <li>
              <Link href="/apollo-client/apollo-client-getStaticProps-query">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  apollo-client (getStaticProps: Query)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/apollo-client/apollo-client-getServerSideProps-query">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  apollo-client (getServerSideProps: Query)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/apollo-client/apollo-client-useEffect-query">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  apollo-client (useEffect: Query)
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
            Introduction to Apollo Client:
            <br />
            <a
              href="https://www.apollographql.com/docs/react/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://www.apollographql.com/docs/react/
            </a>
          </li>
          <li>
            apollo-client (GitHub):
            <br />
            <a
              href="https://github.com/apollographql/apollo-client"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/apollographql/apollo-client
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
