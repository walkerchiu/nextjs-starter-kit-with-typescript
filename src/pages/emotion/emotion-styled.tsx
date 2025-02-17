import { FC } from 'react';

import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

interface ComponentProps {
  className?: string;
  label: string;
}

const Component: FC<ComponentProps> = ({ className, label }) => (
  <div className={className}>{label}</div>
);

interface StyledComponentProps {
  bgColor: string;
}

const StyledComponent0 = styled(Component)<StyledComponentProps>`
  color: white;
  background: ${(props) => (props.label ? props.bgColor : 'white')};
  cursor: pointer;
  &:hover {
    font-size: large;
  }
`;
const StyledComponent1 = styled(Component)<StyledComponentProps>((props) => ({
  color: 'white',
  background: props.label ? props.bgColor : 'white',
  cursor: 'pointer',
  '&:hover': {
    fontSize: 'large',
  },
}));

const EmotionStyledComponent: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Emotion using styled component"
        description="styled is a way to create React components that have styles attached to them."
      />
      <main className="mb-auto p-10">
        <StyledComponent0 bgColor="red" label="Component 0" />
        <StyledComponent1 bgColor="red" label="Component 1" />
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: 'number',
          }}
        >
          <li>
            Emotion:
            <br />
            <a
              href="https://emotion.sh/docs/styled"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://emotion.sh/docs/styled
            </a>
          </li>
          <li>
            Emotion (GitHub):
            <br />
            <a
              href="https://github.com/emotion-js/emotion"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/emotion-js/emotion
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default EmotionStyledComponent;
