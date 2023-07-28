import React, { useInsertionEffect } from "react";

import styled from "@emotion/styled";
import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

interface StyledDivProps {
  color: string;
  fontSize: string;
}

const StyledDiv = styled.div<StyledDivProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

const useInsertionEffectPage: NextPage = () => {
  const color = "red";
  const fontSize = "24px";

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    const sheet = style.sheet as CSSStyleSheet;
    const rules = `.css-${StyledDiv.displayName} {color: ${color}; font-size: ${fontSize};}`;
    sheet.insertRule(rules, 0);
  }, [color, fontSize]);

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useInsertionEffect (CSS in JS)"
        description="useInsertionEffect is a version of useEffect that fires before any DOM mutations."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <StyledDiv color={color} fontSize={fontSize}>
          This is some content.
        </StyledDiv>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            useInsertionEffect:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useInsertionEffect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useInsertionEffect
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useInsertionEffectPage;
