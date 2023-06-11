import React from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const NextCsrfPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="next-csrf" description="CSRF mitigation for Next.js." />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5"
      >
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div>
            <p>
              Test the protected API route by sending a POST request from your
              terminal.
            </p>
            <p>
              Since this request doesn&apos;t have the proper token setup, it
              will fail.
            </p>
          </div>
        </section>
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div>
            <code className="block whitespace-pre overflow-x-scroll text-left">
              curl -X POST http://localhost:3000/api/protected
              <br />
              &gt;&gt; {"{"}&quot;message&quot;: &quot;Invalid CSRF token&quot;
              {"}"}
            </code>
          </div>
        </section>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
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
        </ol>
      </Footer>
    </div>
  );
};

export default NextCsrfPage;
