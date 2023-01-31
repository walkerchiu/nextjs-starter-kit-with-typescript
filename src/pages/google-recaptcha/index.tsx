import type { NextPage } from "next";
import Link from "next/link";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Google reCAPTCHA"
        description="reCAPTCHA is a free service that protects your site from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart."
      />
      <main id="main" className="flex w-full flex-1 flex-col pt-5 pb-10 px-16">
        <article>
          <ol
            style={{
              listStyleType: "number",
            }}
          >
            <li>
              <Link href="/google-recaptcha/react-google-recaptcha-v3">
                <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                  react-google-recaptcha-v3
                </a>
              </Link>
            </li>
          </ol>
        </article>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            Choosing the type of reCAPTCHA:
            <br />
            <a
              href="https://developers.google.com/recaptcha/docs/versions"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://developers.google.com/recaptcha/docs/versions
            </a>
          </li>
          <li>
            Comparison of features between reCAPTCHA versions:
            <br />
            <a
              href="https://cloud.google.com/recaptcha-enterprise/docs/compare-versions"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://cloud.google.com/recaptcha-enterprise/docs/compare-versions
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default IndexPage;
