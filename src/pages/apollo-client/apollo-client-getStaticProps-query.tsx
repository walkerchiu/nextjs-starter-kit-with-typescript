import type { NextPage } from "next";

import { gql } from "@apollo/client";

import client from "../../modules/apollo-client/apollo-client";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

type Country = {
  code: string;
  name: string;
};

interface Props {
  countries: Country[];
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query ExampleQuery {
        countries {
          code
          name
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}

const ApolloClientPage: NextPage<Props> = ({ countries }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="apollo-client (getStaticProps: Query)"
        description="A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="text-left">
          <div className="mb-3">
            <p className="font-bold text-lg">
              Using Apollo Client for statically rendered page data
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
          <ol
            className="pl-6"
            style={{
              listStyleType: "number",
            }}
          >
            {countries.map((country: Country, index) => (
              <li key={index}>
                {country.code} - {country.name}
              </li>
            ))}
          </ol>
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
            getStaticProps:
            <br />
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://nextjs.org/docs/basic-features/data-fetching/get-static-props
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default ApolloClientPage;
