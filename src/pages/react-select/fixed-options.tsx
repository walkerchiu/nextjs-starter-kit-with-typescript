import { useState } from "react";

import type { NextPage } from "next";
import Select, { ActionMeta, OnChangeValue, StylesConfig } from "react-select";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { ColourOption, colourOptions } from "../../modules/react-select/data";

const styles: StylesConfig<ColourOption, true> = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const orderOptions = (values: readonly ColourOption[]) => {
  return values
    .filter((v) => v.isFixed)
    .concat(values.filter((v) => !v.isFixed));
};

const ReactSelectPage: NextPage = () => {
  const [value, setValue] = useState<readonly ColourOption[]>(
    orderOptions([colourOptions[0], colourOptions[1], colourOptions[3]]),
  );

  const onChange = (
    newValue: OnChangeValue<ColourOption, true>,
    actionMeta: ActionMeta<ColourOption>,
  ) => {
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        newValue = colourOptions.filter((v) => v.isFixed);
        break;
    }

    setValue(orderOptions(newValue));
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="react-select (Fixed Options)"
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
            <Select
              value={value}
              isMulti
              styles={styles}
              isClearable={value.some((v) => !v.isFixed)}
              name="colors"
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={onChange}
              options={colourOptions}
            />
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
