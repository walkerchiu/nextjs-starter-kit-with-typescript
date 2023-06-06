import React, {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const useInsertionEffectPage: NextPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect triggered. Count has been updated.", count);
  }, [count]);

  // useInsertionEffect is a version of useEffect that fires before any DOM mutations.
  useInsertionEffect(() => {
    console.log("useInsertionEffect triggered", contentRef.current);
    // useInsertionEffect is aimed at CSS-in-JS library authors.
    // Unless you are working on a CSS-in-JS library and need a place to inject the styles, you probably want useEffect or useLayoutEffect instead.
  });

  // useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
  useLayoutEffect(() => {
    console.log("useLayoutEffect triggered", contentRef.current);
    // useLayoutEffect can hurt performance. Prefer useEffect when possible.
  });

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  const handleCountClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleColorClick = () => {
    setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useInsertionEffect"
        description="useInsertionEffect is a version of useEffect that fires before any DOM mutations."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <p className="mb-2 text-left">
          Because <code>useInsertionEffect</code> fires before the DOM
          mutations, you can see in the console that the initial value of{" "}
          <code>contentRef.current</code> is null.
        </p>
        <div className="text-left">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
            onClick={handleButtonClick}
          >
            {showContent ? "Hide Content" : "Show Content"}
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
            onClick={handleCountClick}
          >
            Update Count
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
            onClick={handleColorClick}
          >
            Update Font Color
          </button>
          <div
            className={showContent ? "block" : "hidden"}
            style={{ color: color }}
            ref={contentRef}
          >
            <p>This is some content.</p>
            <p>Count: {count}</p>
          </div>
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
            useInsertionEffect:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useInsertionEffect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useInsertionEffect
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useInsertionEffectPage;
