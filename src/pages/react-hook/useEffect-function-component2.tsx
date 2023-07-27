import { useState, useEffect } from "react";

import type { NextPage } from "next";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

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

  // If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect.
  // Otherwise, your code will reference stale values from previous renders.

  // If there are multiple items in the array, React will re-run the effect even if just one of them is different.
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  // This tells React that your effect doesn't depend on any values from props or state, so it never needs to re-run.
  useEffect(() => {
    console.log(
      "If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument."
    );
  }, []); // If you pass an empty array ([]), the props and state inside the effect will always have their initial values.

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
  }, [props.friend?.id]); // Only re-subscribe if props.friend.id changes

  return (
    <div>
      {/* {isOnline == null ? "Loading..." : isOnline ? "Online" : "Offline"} */}
      Please check the source code and console output.
    </div>
  );
};

const useEffectFunctionComponentPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useEffect (Function Component 2)"
        description="useEffect is a React Hook that lets you synchronize a component with an external system."
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
