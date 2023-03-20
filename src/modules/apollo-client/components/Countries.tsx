import React from "react";

import { useQuery, gql } from "@apollo/client";

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

interface QueryResult {
  countries: Country[];
}

const QUERY = gql`
  ${COUNTRY_INFO_FIELDS}
  query ExampleQuery {
    countries {
      code
      name
      ...CountryInfoFields
    }
  }
`;

export default function Countries() {
  const { data, loading, error } = useQuery<QueryResult>(QUERY);

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const countries = data!.countries.slice(0, 4);

  return (
    <ol
      className="pl-6"
      style={{
        listStyleType: "number",
      }}
    >
      {countries.map((country: Country, index: number) => (
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
  );
}
