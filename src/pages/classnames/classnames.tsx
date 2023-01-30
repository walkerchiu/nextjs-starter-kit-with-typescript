import { FC } from "react";

import classNames from "classnames";
import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import styles from "../../modules/classnames/tip.module.css";

interface TipProps {
  content: string;
  type?: string;
}

export const Tip: FC<TipProps> = ({ content, type }) => {
  return (
    <div
      className={classNames([styles.tip], {
        [styles.success]: type === "success",
        [styles.warning]: type === "warning",
        [styles.error]: type === "error",
      })}
    >
      {content}
    </div>
  );
};

const ClassnamesPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="classnames"
        description="A simple javascript utility for conditionally joining classNames together."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center pt-5 pb-10 px-20 text-center"
      >
        <Tip content="Success" type="success" />
        <Tip content="Warning" type="warning" />
        <Tip content="Error" type="error" />
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            classnames (GitHub):
            <br />
            <a
              href="https://github.com/JedWatson/classnames"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/JedWatson/classnames
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default ClassnamesPage;
