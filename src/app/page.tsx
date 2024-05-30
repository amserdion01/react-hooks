export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-200">
      <main className="max-w-4xl mx-auto bg-zinc-800 p-10 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-white">React Hooks Explained</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">What are React Hooks?</h2>
          <p className="mb-6 text-zinc-400">
            React Hooks are functions that let you use state and other React features in functional components.
            They were introduced in React 16.8 to simplify the code and enhance the reusability of stateful logic.
          </p>
          <h2 className="text-3xl font-semibold mb-4 text-white">Why use React Hooks?</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li>Simplify complex components by breaking them into smaller functions.</li>
            <li>Encourage code reuse by extracting stateful logic into reusable hooks.</li>
            <li>Avoid the pitfalls of 'this' keyword in class components.</li>
            <li>Improve readability and maintainability of your code.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-white">Learn about Specific Hooks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="/hooks/use-state" className="block bg-zinc-700 p-6 rounded-lg text-blue-400 hover:bg-zinc-600 transition">
              <h3 className="text-2xl font-semibold mb-2">useState</h3>
              <p>Manage state in functional components.</p>
            </a>
            <a href="/hooks/use-effect" className="block bg-zinc-700 p-6 rounded-lg text-blue-400 hover:bg-zinc-600 transition">
              <h3 className="text-2xl font-semibold mb-2">useEffect</h3>
              <p>Handle side effects in functional components.</p>
            </a>
            <a href="/hooks/use-context" className="block bg-zinc-700 p-6 rounded-lg text-blue-400 hover:bg-zinc-600 transition">
              <h3 className="text-2xl font-semibold mb-2">useContext</h3>
              <p>Access React context without wrapping components.</p>
            </a>
            <a href="/hooks/use-reducer" className="block bg-zinc-700 p-6 rounded-lg text-blue-400 hover:bg-zinc-600 transition">
              <h3 className="text-2xl font-semibold mb-2">useReducer</h3>
              <p>Manage complex state logic in functional components.</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
