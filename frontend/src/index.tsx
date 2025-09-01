import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const App = () => {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        textAlign: 'center',
        marginTop: '2rem',
      }}
    >
  <h1 className="text-3xl font-bold">🚀 Hello from the Frontend!</h1>
      <p>If you see this, your React + Vite setup works!</p>
      <div className="max-w-md mx-auto mt-6 text-left">
        <form className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Name</span>
            <input
              type="text"
              placeholder="Jane Doe"
              className="form-input mt-1 block w-full rounded-md border-gray-300 px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Role</span>
            <select className="form-select mt-1 block w-full rounded-md border-gray-300 px-3 py-2">
              <option>Developer</option>
              <option>Designer</option>
              <option>Product</option>
            </select>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-sm">Subscribe to newsletter</span>
          </label>

          <div>
            <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
          </div>
        </form>
      </div>
      <div className="prose lg:prose-xl mx-auto mt-8">
        <h2>Article preview</h2>
        <p>
          This is a short paragraph showing Tailwind Typography styles. The{' '}
          <code>prose</code> class applies sensible defaults for headings,
          paragraphs, lists and code blocks.
        </p>
        <ul>
          <li>Easy to read content out of the box</li>
          <li>Responsive type sizes</li>
          <li>Good default spacing</li>
        </ul>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
}
