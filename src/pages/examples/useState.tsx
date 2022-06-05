import { useState } from "react";

import type { NextPage } from "next";

import Footer from "../../modules/examples/Footer";
import Header from "../../modules/examples/Header";

const useStatePage: NextPage = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useState"
        description="Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center pt-5 pb-10 px-20 text-center"
      >
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
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
            Introducing Hooks:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-intro.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-intro.html
            </a>
          </li>
          <li>
            Hooks at a Glance:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-overview.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-overview.html
            </a>
          </li>
          <li>
            Using the State Hook:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-state.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-state.html
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useStatePage;
