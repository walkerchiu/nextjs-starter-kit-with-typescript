import { useEffect, useState, FC } from "react";

import styled from "@emotion/styled";
import { computePosition, shift, flip, offset } from "@floating-ui/dom";
import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

interface ComponentProps {
  id: string;
  className?: string;
  content: string;
}

const Component: FC<ComponentProps> = ({ id, className, content }) => {
  return (
    <div id={id} className={className}>
      {content}
    </div>
  );
};

const Tip = styled(Component)<StyledComponentProps>`
  position: absolute;
  background: ${(props) => (props.bgColor ? props.bgColor : "")};
  padding: 0.5rem;
  border: dashed gray;
  box-sizing: border-box;
  display: ${(props) => (props.active ? props.active : "none")};
`;

interface StyledComponentProps {
  active?: boolean;
  bgColor: string;
}

const FloatingUITooltipPage: NextPage = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const main = document.getElementById("main");
    const floating = document.getElementById("floating")!;

    main?.addEventListener("mousemove", ({ clientX, clientY }) => {
      const virtualEl = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX,
            right: clientX,
            top: clientY,
            bottom: clientY,
          };
        },
      };

      computePosition(virtualEl, floating, {
        placement: "right-start",
        middleware: [offset(5), flip(), shift()],
      }).then(({ x, y }) => {
        setActive(true);

        Object.assign(floating.style, {
          top: `${y - 50}px`,
          left: `${x}px`,
        });
      });
    });

    main?.addEventListener("mouseleave", (e) => {
      const from = e.relatedTarget;
      if (!from) {
        setActive(false);
      }
    });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Floating UI (Tooltip)"
        description="Floating UI is a low-level toolkit to create floating elements. Tooltips, popovers, dropdowns, menus, and more."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center pt-5 pb-10 px-20 text-center"
      >
        <Tip
          id="floating"
          content="Tooltip"
          active={active}
          bgColor="cornsilk"
        />
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            Floating UI:
            <br />
            <a
              href="https://floating-ui.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://floating-ui.com
            </a>
          </li>
          <li>
            Floating UI (Tutorial):
            <br />
            <a
              href="https://floating-ui.com/docs/tutorial"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://floating-ui.com/docs/tutorial
            </a>
          </li>
          <li>
            Floating UI (GitHub):
            <br />
            <a
              href="https://github.com/floating-ui/floating-ui"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/floating-ui/floating-ui
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default FloatingUITooltipPage;
