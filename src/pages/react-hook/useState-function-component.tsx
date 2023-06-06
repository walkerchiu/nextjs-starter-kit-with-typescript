import React, { useState } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const CountStateExample = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const useStateFunctionComponentPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useState (Function Component)"
        description="useState is a React Hook that lets you add a state variable to your component."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center pt-5 pb-10 px-20 text-center"
      >
        <div className="mb-10 text-left leading-7">
          <p className="mb-5">
            You might have previously known these as &quot;stateless
            components&quot;. We&apos;re now introducing the ability to use
            React state from these, so we prefer the name &quot;function
            components&quot;.
          </p>
          <p>
            Hooks don&apos;t work inside classes. But you can use them instead
            of writing classes.
          </p>
        </div>
        <CountStateExample />
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

export default useStateFunctionComponentPage;
