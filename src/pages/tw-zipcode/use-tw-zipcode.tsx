import { cities, districts, useTwZipCode } from "use-tw-zipcode";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function TwZipCodePage() {
  const { city, district, zipCode, handleCityChange, handleDistrictChange } =
    useTwZipCode();

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="use-tw-zipcode"
        description="A React hook implementation for Taiwanese zip code selection."
      />
      <main className="mb-auto pt-5 px-10 md:px-16">
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <select
            className="
              inline-block
              mr-2
              p-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            onChange={(e) => handleCityChange(e.target.value)}
          >
            {cities.map((city, i) => {
              return <option key={i}>{city}</option>;
            })}
          </select>
          <select
            className="
              inline-block
              p-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            onChange={(e) => handleDistrictChange(e.target.value)}
          >
            {districts[city].map((district, i) => {
              return <option key={i}>{district}</option>;
            })}
          </select>
          <div className="my-5">
            <p>
              <span className="mr-2 font-medium">Result:</span>
              {city}
              {district}
            </p>
            <p>
              <span className="mr-2 font-medium">Zip Code:</span>
              {zipCode}
            </p>
          </div>
        </section>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            use-tw-zipcode:
            <br />
            <a
              href="https://github.com/imgarylai/use-tw-zipcode"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/imgarylai/use-tw-zipcode
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
}
