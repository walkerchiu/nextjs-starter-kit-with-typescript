import type { NextPage } from 'next';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import { colourOptions } from '../../modules/react-select/data';

const animatedComponents = makeAnimated();

const ReactSelectPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="react-select (Animated Components)"
        description="A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support."
      />
      <main
        id="main"
        className="w-full flex-1 flex-col items-center justify-center p-5"
      >
        <section
          style={{
            marginBottom: '20px',
          }}
        >
          <div>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[colourOptions[4], colourOptions[5]]}
              isMulti
              options={colourOptions}
            />
          </div>
        </section>
        <section
          style={{
            marginBottom: '20px',
          }}
        >
          <div>
            <p>
              React-Select comes with a makeAnimated function that create
              animated wrappers around components passed in as arguments.
            </p>
            <p>
              If no arguments are passed, built-in components are wrapped
              instead.
            </p>
          </div>
        </section>
        <section
          style={{
            marginBottom: '20px',
          }}
        >
          <div>
            <p>Remove following line from source code to see them in action:</p>
            <code className="block whitespace-pre overflow-x-scroll text-left pt-5 pl-5">
              components={'{'}animatedComponents{'}'}
            </code>
          </div>
        </section>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: 'number',
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
