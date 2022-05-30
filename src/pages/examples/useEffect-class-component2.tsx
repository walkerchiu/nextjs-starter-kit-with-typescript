import React from 'react';
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

class ExampleComponent extends React.Component<MyProps, MyState> {
  constructor(props: MyState) {
    super(props);
    this.state = { friend: null, isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    // ChatAPI.subscribeToFriendStatus(
    //   this.props.friend?.id,
    //   this.handleStatusChange
    // );
    console.log(`componentDidMount`);
  }

  componentWillUnmount() {
    // ChatAPI.unsubscribeFromFriendStatus(
    //   this.props.friend?.id,
    //   this.handleStatusChange
    // );
    console.log(`componentWillUnmount`);
  }

  handleStatusChange(status: MyState) {
    this.setState({
      isOnline: status.isOnline,
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}

const useEffectClassComponent2Page: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useEffect (Class Component 2)"
        description="If you used classes in React before, this code should look familiar."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center pt-5 pb-10 px-20 text-center"
      >
        <ExampleComponent friend={{id: 1}} />
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

export default useEffectClassComponent2Page;
