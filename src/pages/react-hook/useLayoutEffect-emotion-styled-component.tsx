import { useState } from 'react';

import styled from '@emotion/styled';
import type { NextPage } from 'next';

import useIsomorphicLayoutEffect from './usehooks-ts';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

interface StyledDivProps {
  color: string;
  fontSize: string;
}

const StyledDiv = styled.div<StyledDivProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

const useLayoutEffectPage: NextPage = () => {
  const [color, setColor] = useState('red');
  const [fontSize, setFontSize] = useState('24px');
  const [show, setShow] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setShow(true);
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = `.styled-div {color: ${color}; font-size: ${fontSize};}`;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [color, fontSize]);

  const handleResetStyle = () => {
    setColor('red');
    setFontSize('24px');
    setShow(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useLayoutEffect (Emotion styled component)"
        description="useLayoutEffect is a version of useEffect that fires before the browser repaints the screen."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center p-5 text-center"
      >
        <StyledDiv color={color} fontSize={fontSize}>
          {show ? 'This is some content.' : ''}
        </StyledDiv>
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={() => setColor('blue')}
          >
            Change color
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setFontSize('32px')}
          >
            Change font size
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleResetStyle}
          >
            Reset style
          </button>
        </div>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: 'number',
          }}
        >
          <li>
            Using the Effect Hook:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-effect.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-effect.html
            </a>
          </li>
          <li>
            useEffect:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useEffect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useEffect
            </a>
          </li>
          <li>
            useLayoutEffect:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-reference.html#uselayouteffect
            </a>
          </li>
          <li>
            useLayoutEffect:
            <br />
            <a
              href="https://beta.reactjs.org/reference/react/useLayoutEffect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://beta.reactjs.org/reference/react/useLayoutEffect
            </a>
          </li>
          <li>
            useIsomorphicLayoutEffect:
            <br />
            <a
              href="https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default useLayoutEffectPage;
