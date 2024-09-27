import React from 'react';

import { NextApiRequest, NextApiResponse } from 'next';
import type { NextPage } from 'next';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import { setup } from '../../modules/next-csrf/csrf';

// Here's the important part. `setup` saves the necessary secret and token.
export const getServerSideProps = setup(
  async (req: NextApiRequest, res: NextApiResponse) => {
    return { props: {} };
  },
);

const NextCsrfPage: NextPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form) as unknown as FormData;

    const csrfRequest = {
      method: 'POST',
      body: JSON.stringify(formData),
    };

    fetch('/api/protected', csrfRequest)
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response));
  };

  return (
    <div className="flex flex-col h-screen">
      <Header title="next-csrf" description="CSRF mitigation for Next.js." />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <form onSubmit={handleSubmit}>
          <p className="text-2xl mb-5 font-bold dark:text-white">Test Form</p>
          <div className="mb-6">
            <div className="mb-6 grid grid-cols-4 text-left">
              <label className="block p-3 font-medium" htmlFor="email">
                Email
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  id="email"
                  className="border rounded-lg block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: 'number',
          }}
        >
          <li>
            next-csrf (GitHub):
            <br />
            <a
              href="https://github.com/j0lv3r4/next-csrf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/j0lv3r4/next-csrf
            </a>
          </li>
          <li>
            csrf (GitHub):
            <br />
            <a
              href="https://github.com/pillarjs/csrf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/pillarjs/csrf
            </a>
          </li>
          <li>
            Understanding CSRF:
            <br />
            <a
              href="https://github.com/pillarjs/understanding-csrf#csrf-tokens"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/pillarjs/understanding-csrf#csrf-tokens
            </a>
          </li>
          <li>
            Using the Fetch API:
            <br />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default NextCsrfPage;
