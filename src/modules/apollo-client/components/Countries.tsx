import React from "react";

import { useQuery, gql } from "@apollo/client";

type Country = {
  code: string;
  name: string;
};

interface QueryResult {
  countries: Country[];
}

const QUERY = gql`
  query ExampleQuery {
    countries {
      code
      name
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
          {country.code} - {country.name}
        </li>
      ))}
    </ol>
  );
}
