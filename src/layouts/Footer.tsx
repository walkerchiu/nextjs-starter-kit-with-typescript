import { FC } from 'react';

interface ComponentProps {
  className?: string;
  children?: any;
}

const Footer: FC<ComponentProps> = ({ children }) => {
  return (
    <section
      role="navigation"
      aria-label="Main"
      className="border-t-2 inset-x-0 p-5 md:p-10"
    >
      <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
        <p className="focus:outline-none text-md md:text-xl font-bold">
          Reference
        </p>
        <div className="focus:outline-none font-normal mt-1 text-gray-600 dark:text-white mt-1">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Footer;
