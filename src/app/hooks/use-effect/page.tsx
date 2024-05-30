"use client";

import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function UseEffect() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const codeString = `
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Seconds passed: {seconds}</p>
    </div>
  );
}
  `;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-200">
      <main className="max-w-4xl w-full bg-zinc-800 p-10 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-white">useEffect Hook</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">What is useEffect?</h2>
          <p className="mb-6 text-zinc-400">
            The <code>useEffect</code> hook lets you perform side effects in functional components. It runs after the first render and after every update. 
            It can also return a cleanup function to run when the component unmounts or before the effect runs again.
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
            In this example, the <code>useEffect</code> hook is used to set up a timer that updates the <code>seconds</code> state every second.
            Here’s a step-by-step explanation:
          </p>
          <ul className="list-disc list-inside space-y-3 text-zinc-400">
            <li>
              <strong>Declaring State:</strong> We declare a state variable named <code>seconds</code> and initialize it to <code>0</code>.
            </li>
            <li>
              <strong>Using useEffect:</strong> Inside <code>useEffect</code>, we set up an interval that increments the <code>seconds</code> state every second.
            </li>
            <li>
              <strong>Cleanup Function:</strong> The cleanup function clears the interval when the component unmounts or before the effect runs again to prevent memory leaks.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">Live Example</h2>
          <div className="bg-zinc-700 p-6 rounded-lg text-zinc-200">
            <p>Seconds passed: {seconds}</p>
          </div>
        </section>

        <a href="/" className="text-blue-400 hover:underline mt-8 block text-center">Back to Home</a>
      </main>
    </div>
  );
}
