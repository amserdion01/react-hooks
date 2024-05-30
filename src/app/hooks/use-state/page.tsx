"use client";

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function UseState() {
  const [count, setCount] = useState(0);

  const codeString = `
import { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" and a function to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
  `;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-200">
      <main className="max-w-4xl w-full bg-zinc-800 p-10 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-white">useState Hook</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">What is useState?</h2>
          <p className="mb-6 text-zinc-400">
            The <code>useState</code> hook is a function that lets you add state to functional components.
            It returns an array with two elements: the current state and a function to update it.
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
            In this example, the <code>useState</code> hook is used to add state to the <code>Counter</code> component.
            Here’s a step-by-step explanation:
          </p>
          <ul className="list-disc list-inside space-y-3 text-zinc-400">
            <li>
              <strong>Importing useState:</strong> First, we import the <code>useState</code> hook from React.
            </li>
            <li>
              <strong>Declaring State:</strong> Inside the <code>Counter</code> component, we call <code>useState(0)</code>
              to declare a state variable named <code>count</code> and initialize it to <code>0</code>. The <code>useState</code>
              hook returns an array with two elements: the current state and a function to update it, which we call <code>setCount</code>.
            </li>
            <li>
              <strong>Rendering State:</strong> We use the <code>count</code> variable to display the current count in a <code>&lt;p&gt;</code> element.
            </li>
            <li>
              <strong>Updating State:</strong> When the button is clicked, we call <code>setCount(count + 1)</code> to update the state. This
              re-renders the component with the new count value.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">Live Example</h2>
          <div className="bg-zinc-700 p-6 rounded-lg text-zinc-200">
            <p className="mb-4">You clicked {count} times</p>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount(count + 1)}
            >
              Click me
            </button>
          </div>
        </section>

        <a href="/" className="text-blue-400 hover:underline mt-8 block text-center">Back to Home</a>
      </main>
    </div>
  );
}
