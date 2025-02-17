import React, { forwardRef, useRef } from 'react';

import type { NextPage } from 'next';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const MyInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      className="border rounded py-2 px-3 text-gray-700 leading-tight"
      type="text"
      placeholder="Text"
      ref={ref}
      {...props}
    />
  );
});
MyInput.displayName = 'MyInput';

const useRefPage: NextPage = () => {
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  // The returned object will persist for the full lifetime of the component.
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    // `current` points to the mounted text input element
    inputRef.current?.focus();
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useRef (Exposing a ref to your own component)"
        description="useRef is a React Hook that lets you reference a value that’s not needed for rendering."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <div>
          <p className="mb-2 text-left">
            <code>useRef</code> is a React Hook that lets you reference a value
            that&apos;s not needed for rendering.
          </p>
          <MyInput ref={inputRef} />
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleClick}
          >
            Focus the input
          </button>
        </div>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: 'number',
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
