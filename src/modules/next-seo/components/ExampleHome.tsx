import { FC } from 'react';

interface ComponentProps {
  children: any;
}

const ExampleLayout: FC<ComponentProps> = ({ children }) => {
  return <main className="w-full">{children}</main>;
};

export default ExampleLayout;
