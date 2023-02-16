import { useRef, useState } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const useRefPage: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useRef (Video)"
        description="Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div className="mb-10 text-left">
          <p className="font-bold text-lg">
            <code>useRef</code>: Playing and pausing a video
          </p>
          <p>
            This example uses a ref to call <code>play()</code> and{" "}
            <code>pause()</code> on a <code>&lt;video&gt;</code> DOM node.
          </p>
        </div>
        <div>
          <video
            width="250"
            ref={ref}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>
          <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
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
