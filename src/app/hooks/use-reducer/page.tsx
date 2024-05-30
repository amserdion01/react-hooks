"use client";

import { useReducer } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type State = {
  count: number;
};

type Action = {
  type: 'increment' | 'decrement';
};

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const codeString = `
import { useReducer } from 'react';

type State = {
  count: number;
};

type Action = {
  type: 'increment' | 'decrement';
};

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
}
  `;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-200">
      <main className="max-w-4xl w-full bg-zinc-800 p-10 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-white">useReducer Hook</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">What is useReducer?</h2>
          <p className="mb-6 text-zinc-400">
            The <code>useReducer</code> hook is used for managing state in a React component, typically when you have complex state logic or multiple sub-values. It is an alternative to <code>useState</code> and is usually preferred in scenarios where the next state depends on the previous state.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">Code Example</h2>
          <SyntaxHighlighter language="javascript" style={atomDark} className="rounded-lg">
            {codeString}
          </SyntaxHighlighter>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">How it Works</h2>
          <p className="mb-6 text-zinc-400">
            In this example, the <code>useReducer</code> hook is used to manage the state of a counter. Here’s a step-by-step explanation:
          </p>
          <ul className="list-disc list-inside space-y-3 text-zinc-400">
            <li>
              <strong>Initial State:</strong> We define an initial state object with a <code>count</code> property.
            </li>
            <li>
              <strong>Reducer Function:</strong> The reducer function takes the current state and an action, and returns the new state based on the action type.
            </li>
            <li>
              <strong>useReducer Hook:</strong> We call <code>useReducer</code> with the reducer function and initial state, which returns the current state and a dispatch function.
            </li>
            <li>
              <strong>Dispatch Actions:</strong> The dispatch function is used to send actions to the reducer to update the state.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">Live Example</h2>
          <div className="bg-zinc-700 p-6 rounded-lg text-zinc-200">
            <p className="mb-4">Count: {state.count}</p>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
              onClick={() => dispatch({ type: 'increment' })}
            >
              Increment
            </button>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch({ type: 'decrement' })}
            >
              Decrement
            </button>
          </div>
        </section>

        <a href="/" className="text-blue-400 hover:underline mt-8 block text-center">Back to Home</a>
      </main>
    </div>
  );
}
