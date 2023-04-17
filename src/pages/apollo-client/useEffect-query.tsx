import { ApolloProvider } from "@apollo/client";
import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import client from "../../modules/apollo-client/apollo-client";
import ClientOnly from "../../modules/apollo-client/components/ClientOnly";
import Countries from "../../modules/apollo-client/components/Countries";

const ApolloClientPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="apollo-client (useEffect: Query)"
        description="Client-side rendering is what we typically do in React apps. The browser requests the app, the page loads, then React requests the data and presents it to the user."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="text-left">
          <div className="mb-3">
            <p className="font-bold text-lg">
              Using Apollo Client for client-side data
            </p>
            <p>
              <a
                href="https://countries.trevorblades.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                https://countries.trevorblades.com
              </a>
            </p>
          </div>
          <ApolloProvider client={client}>
            <ClientOnly>
              <Countries />
            </ClientOnly>
          </ApolloProvider>
        </div>
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
          <li>
            Using Apollo Client for client-side data:
            <br />
            <a
              href="https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/#using-apollo-client-for-client-side-data"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/#using-apollo-client-for-client-side-data
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default ApolloClientPage;
