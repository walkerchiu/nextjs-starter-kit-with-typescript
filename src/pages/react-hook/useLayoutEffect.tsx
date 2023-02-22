import { useLayoutEffect, useState } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const useLayoutEffectPage: NextPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // If you use the useEffect hook, because it runs after the element is rendered, we cannot guarantee that the my-element element is already available.
  useLayoutEffect(() => {
    const el = document.getElementById("my-element");
    if (el) {
      el.style.visibility = isVisible ? "visible" : "hidden";
    }
  }, [isVisible]);

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useLayoutEffect"
        description="useLayoutEffect is a version of useEffect that fires before the browser repaints the screen."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="mb-10 text-left">
          <p className="font-bold text-lg">
            <code>useLayoutEffect</code>: Toggle visibility
          </p>
          <p className="mb-5">
            In many cases, using <code>useEffect</code> will successfully update
            an element&apos;s style. However, useEffect can be problematic when
            you need to ensure that the element is styled immediately after it
            has rendered properly. This is because <code>useEffect</code> is
            executed after rendering, rather than synchronously during
            rendering, which may cause the element&apos;s style to not be
            updated immediately during the current rendering phase.
          </p>
          <p className="mb-5">
            Therefore, if you need to style an element immediately during the
            current render phase, it is better to use{" "}
            <code>useLayoutEffect</code> instead of
            <code>useEffect</code>. <code>useLayoutEffect</code> is executed
            synchronously before the DOM is updated, so it is guaranteed to set
            the style of the element immediately during the current rendering
            phase.
          </p>
          <p>
            In general, both <code>useEffect</code> and{" "}
            <code>useLayoutEffect</code> can be used to update an element&apos;s
            style, but in some cases, using <code>useLayoutEffect</code> may be
            more reliable.
          </p>
        </div>
        <div>
          <div className="mb-5" id="my-element">
            Hello, world!
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleClick}
          >
            Toggle visibility
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
            useLayoutEffect:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-reference.html#uselayouteffect
            </a>
          </li>
          <li>
            useLayoutEffect:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useLayoutEffect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useLayoutEffect
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useLayoutEffectPage;
