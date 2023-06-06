import React, { useRef, useState } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const useRefPage: NextPage = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    if (intervalRef.current != null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useRef (StopWatch)"
        description="useRef is a React Hook that lets you reference a value that’s not needed for rendering."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div>
          <p className="mb-5">Time passed: {secondsPassed.toFixed(3)}</p>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleStop}
          >
            Stop
          </button>
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
