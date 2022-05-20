import type { NextPage } from 'next';
import Head from 'next/head';
import Link from "next/link";
import styles from '../app/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div
      className={styles.container}
    >
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main
        className={styles.main}
      >
        <h1
          className={styles.title}
        >
          Next.js Starter
        </h1>

        <div
          className="text-xl"
        >
          With TypeScript, TailwindCSS, Emotion
        </div>

        <p
          className={styles.description}
        >
          Get started by editing{' '}
          <code
            className="p-2 leading-none bg-pink-50 text-slate-900"
          >
            pages/index.tsx
          </code>
        </p>

        <section
          className={styles.grid}
        >
          <a
            href="https://nextjs.org/docs/basic-features/pages"
            className={styles.card}
          >
            <h2>Next.js &rarr;</h2>
            <p>Gives you the best developer experience with all the features you need for production. No config needed.</p>
          </a>

          <a
            href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
            className={styles.card}
          >
            <h2>TypeScript &rarr;</h2>
            <p>
              A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
            </p>
          </a>

          <a
            href="https://tailwindcss.com/docs/utility-first"
            className={styles.card}
          >
            <h2>Tailwind CSS &rarr;</h2>
            <p>A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.</p>
          </a>

          <a
            href="https://emotion.sh/docs/css-prop"
            className={styles.card}
          >
            <h2>Emotion &rarr;</h2>
            <p>Provides powerful and predictable style composition in addition to a great developer experience with features.</p>
          </a>
        </section>

        <section
          className={styles.board}
        >
          <header>Example</header>
          <article>
            <h2>Emotion</h2>
            <ol
              style={{
                listStyleType: "number"
              }}
            >
              <li>
                <Link
                  href="/examples/emotion-css-prop"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    Emotion using CSS Prop
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="/examples/emotion-styled"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    Emotion using styled component
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <h2>Font Awesome</h2>
            <ol
              style={{
                listStyleType: "number"
              }}
            >
              <li>
                <Link
                  href="/examples/fontawesome-individually"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    Font Awesome (Individually)
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <h2>next-i18next</h2>
            <ol
              style={{
                listStyleType: "number"
              }}
            >
              <li>
                <Link
                  href="/examples/next-i18next-page1"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    next-i18next
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <h2>next-seo</h2>
            <ol
              style={{
                listStyleType: "number"
              }}
            >
              <li>
                <Link
                  href="/examples/next-seo"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    next-seo
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <h2>React Hook Form</h2>
            <ol
              style={{
                listStyleType: "number"
              }}
            >
              <li>
                <Link
                  href="/examples/react-hook-form"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    React Hook Form
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <h2>Tailwind CSS</h2>
            <ol
              style={{
                listStyleType: "number"
              }}
            >
              <li>
                <Link
                  href="/examples/tailwindcss"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    Tailwind CSS
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="/examples/tailwind-styled-components"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    Tailwind-Styled-Component
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <h2>XState</h2>
            <ol
              style={{
                listStyleType: "number"
              }}
            >
              <li>
                <Link
                  href="/examples/xstate"
                >
                  <a
                    className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
                  >
                    XState
                  </a>
                </Link>
              </li>
            </ol>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Home
