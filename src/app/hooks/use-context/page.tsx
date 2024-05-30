"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// Create a context with a default value
const CountContext = createContext({ count: 0, setCount: (count: number) => {} });

const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const CounterDisplay = () => {
  const { count } = useContext(CountContext);
  return <p className="mb-4">Current count: {count}</p>;
};

const CounterButtons = () => {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default function UseContext() {
  const codeString = `
import { createContext, useContext, useState, ReactNode } from 'react';

// Create a context with a default value
const CountContext = createContext({ count: 0, setCount: (count: number) => {} });

const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const CounterDisplay = () => {
  const { count } = useContext(CountContext);
  return <p>Current count: {count}</p>;
};

const CounterButtons = () => {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
    </div>
  );
};

function App() {
  return (
    <CountProvider>
      <CounterDisplay />
      <CounterButtons />
    </CountProvider>
  );
}
  `;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-200">
      <main className="max-w-4xl w-full bg-zinc-800 p-10 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-white">useContext Hook</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">What is useContext?</h2>
          <p className="mb-6 text-zinc-400">
            The <code>useContext</code> hook lets you access the value of a context directly from a functional component. It provides a way to share values like state between components without having to pass props down manually at every level.
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
            In this example, the <code>useContext</code> hook is used to share state between the <code>CounterDisplay</code> and <code>CounterButtons</code> components. Here’s a step-by-step explanation:
          </p>
          <ul className="list-disc list-inside space-y-3 text-zinc-400">
            <li>
              <strong>Creating Context:</strong> We create a context called <code>CountContext</code> with a default value.
            </li>
            <li>
              <strong>Provider Component:</strong> The <code>CountProvider</code> component manages the state and provides the context value to its children.
            </li>
            <li>
              <strong>Using useContext:</strong> The <code>CounterDisplay</code> and <code>CounterButtons</code> components use the <code>useContext</code> hook to access the context value.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">Live Example</h2>
          <div className="bg-zinc-700 p-6 rounded-lg text-zinc-200">
            <CountProvider>
              <CounterDisplay />
              <CounterButtons />
            </CountProvider>
          </div>
        </section>

        <a href="/" className="text-blue-400 hover:underline mt-8 block text-center">Back to Home</a>
      </main>
    </div>
  );
}
