import React, { useRef, useState } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import useIsomorphicLayoutEffect from "./usehooks-ts";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const useLayoutEffectPage: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const images = [
    "https://via.placeholder.com/500x300/ff0000/ffffff",
    "https://via.placeholder.com/500x300/00ff00/ffffff",
    "https://via.placeholder.com/500x300/0000ff/ffffff",
  ];

  useIsomorphicLayoutEffect(() => {
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
        title="React Hook - useLayoutEffect (Carousel)"
        description="useLayoutEffect is a version of useEffect that fires before the browser repaints the screen."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="mb-5 text-left">
          <p className="font-bold text-lg">
            <code>useLayoutEffect</code>: Carousel
          </p>
        </div>
        <div className="mb-5">
          <Image
            src={images[currentIndex]}
            alt="carousel"
            onClick={handleImageClick}
            width={500}
            height={300}
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
          <li>
            useIsomorphicLayoutEffect:
            <br />
            <a
              href="https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useLayoutEffectPage;
