import { assign, createMachine } from 'xstate';

export const counterMachine = createMachine({
  id: 'changeCount',
  initial: 'active',
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        INC: {
          actions: assign({
            count: ({ context }) => context.count + 1,
          }),
        },
        DEC: {
          actions: assign({
            count: ({ context }) => context.count - 1,
          }),
        },
        RESET: { actions: assign({ count: 0 }) },
      },
    },
  },
});
