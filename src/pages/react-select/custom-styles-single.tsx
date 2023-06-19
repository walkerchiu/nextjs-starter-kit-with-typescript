import chroma from "chroma-js";
import type { NextPage } from "next";
import Select, { StylesConfig } from "react-select";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { ColourOption, colourOptions } from "../../modules/react-select/data";

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles: any) => ({ ...styles, backgroundColor: "white" }),
  option: (
    styles: { [x: string]: any },
    { data, isDisabled, isFocused, isSelected }: any
  ) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles: any) => ({ ...styles, ...dot() }),
  placeholder: (styles: any) => ({ ...styles, ...dot("#ccc") }),
  singleValue: (styles: any, { data }: any) => ({
    ...styles,
    ...dot(data.color),
  }),
};

const ReactSelectPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="react-select (Custom Styles: Single)"
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
              defaultValue={colourOptions[2]}
              options={colourOptions}
              styles={colourStyles}
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
              Style individual components with custom css using the{" "}
              <code>styles</code> prop.
            </p>
            <p>
              You can see a full explanation of how to do this on the{" "}
              <a
                href="https://react-select.com/styles"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                styles
              </a>{" "}
              page.
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
