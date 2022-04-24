import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import styles from '../app/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js Starter
        </h1>

        <div className="text-xl">
          With TypeScript, TailwindCSS, Emotion
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <section className={styles.grid}>
          <a href="https://nextjs.org/docs/basic-features/pages" className={styles.card}>
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

          <a href="https://emotion.sh/docs/css-prop" className={styles.card}>
            <h2>Emotion &rarr;</h2>
            <p>Provides powerful and predictable style composition in addition to a great developer experience with features.</p>
          </a>
        </section>

        <section className={styles.board}>
          <header>Example</header>
          <article>
            <h2>Emotion</h2>
            <ol style={{ listStyleType: "number" }}>
              <li>
                <Link
                  href="/examples/emotion-react"
                >
                  <a>emotion-react</a>
                </Link>
              </li>
              <li>
                <Link
                  href="/examples/emotion-styled"
                >
                  <a>emotion-styled</a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <h2>next-i18next</h2>
            <ol style={{ listStyleType: "number" }}>
              <li>
                <Link
                  href="/examples/next-i18next-page1"
                >
                  <a>next-i18next</a>
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
