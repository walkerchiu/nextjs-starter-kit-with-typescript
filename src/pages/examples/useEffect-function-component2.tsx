import { useState, useEffect } from "react";

import type { NextPage } from "next";

import Footer from "../../modules/examples/Footer";
import Header from "../../modules/examples/Header";

type Friend = {
  id: number;
};

interface MyProps {
  friend: Friend | null;
}

interface MyState {
  friend: Friend | null;
  isOnline: boolean | null;
}

const ExampleComponent = (props: MyProps) => {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    function handleStatusChange(status: MyState) {
      setIsOnline(status.isOnline);
    }

    // ChatAPI.subscribeToFriendStatus(props.friend?.id, handleStatusChange);
    console.log("subscribeToFriendStatus");

    // Specify how to clean up after this effect:
    return function cleanup() {
      // ChatAPI.unsubscribeFromFriendStatus(props.friend?.id, handleStatusChange);
      console.log("unsubscribeFromFriendStatus");
    };
  });

  return (
    <div>
      {isOnline == null ? "Loading..." : isOnline ? "Online" : "Offline"}
    </div>
  );
};

const useEffectFunctionComponentPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useEffect (Function Component 2)"
        description="Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center pt-5 pb-10 px-20 text-center"
      >
        <ExampleComponent friend={{ id: 1 }} />
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            Introducing Hooks:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-intro.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-intro.html
            </a>
          </li>
          <li>
            Hooks at a Glance:
            <br />
            <a
              href="https://reactjs.org/docs/hooks-overview.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://reactjs.org/docs/hooks-overview.html
            </a>
          </li>
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
        </ol>
      </Footer>
    </div>
  );
};

export default useEffectFunctionComponentPage;
