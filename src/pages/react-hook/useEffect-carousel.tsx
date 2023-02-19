import { useEffect, useRef, useState } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const useEffectPage: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const images = [
    "https://via.placeholder.com/500x300/ff0000/ffffff",
    "https://via.placeholder.com/500x300/00ff00/ffffff",
    "https://via.placeholder.com/500x300/0000ff/ffffff",
  ];

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 1500);
    }
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPaused, images.length]);

  const handleImageClick = () => {
    setIsPaused(true);
  };

  const handleResumeClick = () => {
    setIsPaused(false);
  };

  const handlePauseClick = () => {
    setIsPaused(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useEffect (Carousel)"
        description="Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="mb-5 text-left">
          <p className="font-bold text-lg">
            <code>useEffect</code>: Carousel
          </p>
          <p className="mb-5">
            This code does not need to be changed to{" "}
            <code>useLayoutEffect</code>, because the operation here does not
            affect the layout of the browser, that is, it will not affect the
            rendering of the DOM, so <code>useEffect</code> is fine.
          </p>
          <p className="mb-5">
            If you change the above code to <code>useLayoutEffect</code>, it may
            increase the burden of rendering, and it will not bring any
            additional benefits.
          </p>
        </div>
        <div className="mb-5">
          <img
            src={images[currentIndex]}
            alt="carousel"
            onClick={handleImageClick}
          />
        </div>
        <div>
          {isPaused ? (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={handleResumeClick}
            >
              Resume
            </button>
          ) : (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={handlePauseClick}
            >
              Pause
            </button>
          )}
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
            Using the Effect Hook:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-effect.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-effect.html
            </a>
          </li>
          <li>
            useEffect:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useEffect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useEffect
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useEffectPage;
