import React, { useRef } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const useRefPage: NextPage = () => {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useRef (Counter)"
        description="useRef is a React Hook that lets you reference a value that’s not needed for rendering."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="mb-10 text-left">
          <p className="font-bold text-lg">
            <code>useRef</code>: Counter
          </p>
          <p>
            This component uses a ref to keep track of how many times the button
            was clicked.
          </p>
          <p className="mb-5">
            Note that it&apos;s okay to use a ref instead of state here because
            the click count is only read and written in an event handler.
          </p>
          <p>
            If you show {ref.current} in the JSX, the number won&apos;t update
            on click.
          </p>
          <p>
            This is because setting ref.current does not trigger a re-render.
            Information that&apos;s used for rendering should be state instead.
          </p>
        </div>
        <div>
          <p>You clicked {ref.current} times</p>
          <button onClick={handleClick}>Click me</button>
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
            useRef:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-reference.html#useref"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-reference.html#useref
            </a>
          </li>
          <li>
            useRef:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useRef"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useRef
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useRefPage;
