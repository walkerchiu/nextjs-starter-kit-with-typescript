import type { NextPage } from "next";
import AsyncCreatableSelect from "react-select/async-creatable";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { ColourOption, colourOptions } from "../../modules/react-select/data";

const filterColors = (inputValue: string) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase()),
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise<ColourOption[]>((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

const ReactSelectPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="react-select (Creatable: Async)"
        description="A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support."
      />
      <main
        id="main"
        className="w-full flex-1 flex-col items-center justify-center p-5"
      >
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div>
            <AsyncCreatableSelect
              cacheOptions
              defaultOptions
              loadOptions={promiseOptions}
            />
          </div>
        </section>
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div>
            <p>
              This example uses the combined async + creatable variant, imported
              from <code>react-select/async-creatable</code>
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

export default ReactSelectPage;
