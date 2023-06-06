import React from "react";

import { gql } from "@apollo/client";
import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import client from "../../modules/apollo-client/apollo-client";

export const COUNTRY_INFO_FIELDS = gql`
  fragment CountryInfoFields on Country {
    emoji
    native
    phone
    phones
  }
`;

type Country = {
  code: string;
  emoji: string;
  name: string;
  native: string;
  phone: string;
  phones: [string];
};

interface Props {
  countries: Country[];
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      ${COUNTRY_INFO_FIELDS}
      query ExampleQuery {
        countries {
          code
          name
          ...CountryInfoFields
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
        title="apollo-client (getServerSideProps: Query)"
        description="A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="text-left">
          <div className="mb-3">
            <p className="font-bold text-lg">
              Using Apollo Client for server side rendered page data
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
                <p>
                  <strong>Name:</strong> {country.name}
                </p>
                <p>
                  <strong>Code:</strong> {country.code}
                </p>
                <p>
                  <strong>Emoji:</strong> {country.emoji}
                </p>
                <p>
                  <strong>Native:</strong> {country.native}
                </p>
                <p>
                  <strong>Phone:</strong> {country.phone}
                </p>
                <p>
                  <strong>Phones:</strong> {country.phones}
                </p>
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
            getServerSideProps:
            <br />
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default ApolloClientPage;
