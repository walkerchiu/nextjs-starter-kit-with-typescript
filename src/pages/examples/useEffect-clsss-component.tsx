import { Component } from 'react';

import type { NextPage } from "next";

import Footer from "../../modules/examples/Footer";
import Header from "../../modules/examples/Header";


interface CountState {
  count: number;
}

class CountStateExample extends Component<unknown, CountState> {
  constructor(props: CountState) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(`componentDidMount: You clicked ${this.state.count} times`);
  }

  componentDidUpdate(prevProps: CountState, prevState: CountState) {
    // In some cases, cleaning up or applying the effect after every render might create a performance problem.
    // If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect.
    // Otherwise, your code will reference stale values from previous renders.
    if (prevState.count !== this.state.count) {
      console.log(`componentDidUpdate: You clicked ${this.state.count} times`);
    }
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

const useEffectClassComponentPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="React Hook - useEffect (Class Component)"
        description="If you used classes in React before, this code should look familiar."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center pt-5 pb-10 px-20 text-center"
      >
        <CountStateExample />
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

export default useEffectClassComponentPage;
