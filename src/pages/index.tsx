import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../app/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Next.js Starter Kit</title>
        <meta
          name="description"
          content="Learn how to use various common kits!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Starter Kit</h1>

        <div className="mt-4 mt-md-0 text-xl">
          Learn how to use various common kits!
        </div>

        <section className={styles.board}>
          <article>
            <header>Indexes</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link
                  href="/apollo-client"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  apollo-client
                </Link>
              </li>
              <li>
                <Link
                  href="/classnames"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  classnames
                </Link>
              </li>
              <li>
                <Link
                  href="/csrf"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  csrf
                </Link>
              </li>
              <li>
                <Link
                  href="/dnd-kit"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  dnd-kit
                </Link>
              </li>
              <li>
                <Link
                  href="/emotion"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Emotion
                </Link>
              </li>
              <li>
                <Link
                  href="/floating-ui"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Floating UI
                </Link>
              </li>
              <li>
                <Link
                  href="/fontawesome"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Font Awesome
                </Link>
              </li>
              <li>
                <Link
                  href="/google-recaptcha"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Google reCAPTCHA
                </Link>
              </li>
              <li>
                <Link
                  href="/loading-progress"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Loading Progress
                </Link>
              </li>
              <li>
                <Link
                  href="/next-i18next"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  next-i18next
                </Link>
              </li>
              <li>
                <Link
                  href="/next-seo"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  next-seo
                </Link>
              </li>
              <li>
                <Link
                  href="/react-hook"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  React Hook
                </Link>
              </li>
              <li>
                <Link
                  href="/react-hook-form"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  React Hook Form
                </Link>
              </li>
              <li>
                <Link
                  href="/react-select"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  React Select
                </Link>
              </li>
              <li>
                <Link
                  href="/sass-scss"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Sass & Scss
                </Link>
              </li>
              <li>
                <Link
                  href="/tailwindcss"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Tailwind CSS
                </Link>
              </li>
              <li>
                <Link
                  href="/tw-zipcode"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Taiwan ZipCode
                </Link>
              </li>
              <li>
                <Link
                  href="/tiptap"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  Tiptap
                </Link>
              </li>
              <li>
                <Link
                  href="/xstate"
                  className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                >
                  XState
                </Link>
              </li>
            </ol>
          </article>
        </section>

        <section className={styles.grid}>
          <a
            href="https://nextjs.org/docs/basic-features/pages"
            className={styles.card}
          >
            <header>Next.js &rarr;</header>
            <p>
              Gives you the best developer experience with all the features you
              need for production. No config needed.
            </p>
          </a>

          <a
            href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
            className={styles.card}
          >
            <header>React &rarr;</header>
            <p>
              A declarative, efficient, and flexible JavaScript library for
              building interactive user interfaces.
            </p>
          </a>

          <a
            href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
            className={styles.card}
          >
            <header>TypeScript &rarr;</header>
            <p>
              A strongly typed programming language that builds on JavaScript,
              giving you better tooling at any scale.
            </p>
          </a>

          <a
            href="https://tailwindcss.com/docs/utility-first"
            className={styles.card}
          >
            <header>Tailwind CSS &rarr;</header>
            <p>
              A utility-first CSS framework packed with classes that can be
              composed to build any design, directly in your markup.
            </p>
          </a>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
