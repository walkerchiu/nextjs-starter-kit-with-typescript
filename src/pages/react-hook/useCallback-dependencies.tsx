import React, { useCallback, useEffect, useState } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleButtonClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleTextChange = useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setText(event.target.value);
    },
    []
  );

  useEffect(() => {
    console.log("Component re-rendered");
  }, [handleButtonClick]);

  return (
    <React.Fragment>
      <p>Text: {text}</p>
      <input
        className="border rounded py-2 px-3 text-gray-700 leading-tight"
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      <p>Count: {count}</p>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleButtonClick}
      >
        Increment Count
      </button>
    </React.Fragment>
  );
}

const useCallbackPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useCallback (Dependencies)"
        description="useCallback is a React Hook that lets you cache a function definition between re-renders."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div>
          <ExampleComponent />
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
            useCallback:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-reference.html#usecallback"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-reference.html#usecallback
            </a>
          </li>
          <li>
            useCallback:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useCallback"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useCallback
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useCallbackPage;
