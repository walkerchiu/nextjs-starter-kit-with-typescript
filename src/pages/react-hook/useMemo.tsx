import React, { useMemo, useState } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

function expensiveOperation(n: number) {
  console.log("Executing expensiveOperation");

  let result = 0;
  for (let i = 0; i < n; i++) {
    result += i;
  }

  return result;
}

function ExampleComponent() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => expensiveOperation(count), [count]);

  return (
    <React.Fragment>
      <p className="mb-5">
        Please observe the number of occurrences of &quot;Executing
        expensiveOperation&quot; in the console.
      </p>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
    </React.Fragment>
  );
}

function ExampleComponent2() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const result = expensiveOperation(count);

  return (
    <React.Fragment>
      <p className="mb-5">Components are re-rendered when state changes.</p>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <p>Result: {result}</p>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount2(count2 + 1)}
      >
        Increment Count2
      </button>
    </React.Fragment>
  );
}

function ExampleComponent3() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const result = useMemo(() => expensiveOperation(count), [count]);

  return (
    <React.Fragment>
      <p className="mb-5">
        Because <code>useMemo</code> is used to remember,
        &quot;expensiveOperation&quot; will not be executed repeatedly.
      </p>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <p>Result: {result}</p>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount2(count2 + 1)}
      >
        Increment Count2
      </button>
    </React.Fragment>
  );
}

const useMemoPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useMemo"
        description="useMemo is a React Hook that lets you cache the result of a calculation between re-renders."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="w-full mb-5 pb-5 border-b-2">
          <ExampleComponent />
        </div>
        <div className="w-full mb-5 pb-5 border-b-2">
          <ExampleComponent2 />
        </div>
        <div className="w-full mb-5 pb-5 border-b-2">
          <ExampleComponent3 />
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
            useMemo:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-reference.html#usememo"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-reference.html#usememo
            </a>
          </li>
          <li>
            useMemo:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useMemo"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useMemo
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useMemoPage;
