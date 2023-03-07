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
                <Link href="/apollo-client">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    apollo-client
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/classnames">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    classnames
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dnd-kit">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    dnd-kit
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/emotion">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Emotion
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/floating-ui">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Floating UI
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/fontawesome">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Font Awesome
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/google-recaptcha">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Google reCAPTCHA
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/next-i18next">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    next-i18next
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/next-seo">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    next-seo
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/react-hook">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    React Hook
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/react-hook-form">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    React Hook Form
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tailwindcss">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Tailwind CSS
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/xstate">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    XState
                  </a>
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
