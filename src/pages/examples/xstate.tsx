import type { NextPage } from 'next';
import { useMachine } from '@xstate/react';
import { Counter, Toggle, TrafficLight } from '../../modules/examples/xstate/components';
import { counterMachine, toggleMachine, nextTrafficLightMachine } from '../../modules/examples/xstate/machines';
import Header from '../../modules/examples/Header';
import Footer from '../../modules/examples/Footer';

const XStatePage: NextPage = () => {
  const [toggleCurrent, toggleSend] = useMachine(toggleMachine);
  const [counterCurrent, counterSend] = useMachine(counterMachine, {
    context: { count: 999 },
  });
  const [nextCurrent, nextSend] = useMachine(nextTrafficLightMachine);

  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header />
      <main
        className="mb-auto px-10"
      >
        <Counter
          counter={{
            count: counterCurrent.context.count,
            increment: () => counterSend('INC'),
            decrement: () => counterSend('DEC'),
            reset: () => counterSend('RESET'),
          }}
        />
        <hr
          style={{ margin: '20px 0' }}
        />
        <Toggle
          onToggle={() => toggleSend('TOGGLE')}
          active={toggleCurrent.matches('active')}
        />
        <hr
          style={{ margin: '20px 0' }}
        />
        <TrafficLight
          onNext={() => nextSend('NEXT')}
          status={nextCurrent.value}
        />
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{ listStyleType: "number" }}
        >
          <li>
            Introduction to state machines and statecharts:<br />
            <a
              href="https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts
            </a>
          </li>
          <li>
            Using TypeScript with XState:<br />
            <a
              href="https://xstate.js.org/docs/guides/typescript.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://xstate.js.org/docs/guides/typescript.html
            </a>
          </li>
          <li>
            XState (GitHub):<br />
            <a
              href="https://github.com/statelyai/xstate"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/statelyai/xstate
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  )
};

export default XStatePage;
