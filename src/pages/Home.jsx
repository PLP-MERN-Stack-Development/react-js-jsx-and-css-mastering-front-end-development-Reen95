import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import QuoteCard from '../components/QuoteCard'
import { fetchRandomQuote } from '../api/quotes'

export default function Home({ name, setName }) {
  const [count, setCount] = useState(0)
  const { data, loading, error, refetch } = useFetch(fetchRandomQuote)

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Hello, {name}</h2>
          <input
            className="mt-2 w-full p-2 border rounded"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <div className="mt-4">
            <button
              onClick={() => setCount(c => c + 1)}
              className="px-3 py-2 bg-blue-600 text-white rounded"
            >
              Click me
            </button>
            <span className="ml-3 text-sm">Clicked {count} times</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-md font-medium mb-2">Random Quote (API)</h3>
          {loading && <div className="p-4 bg-white rounded shadow">Loading…</div>}
          {error && <div className="p-4 bg-red-100 text-red-700 rounded">Error loading quote</div>}
          {data && <QuoteCard quote={data.content} author={data.author} />}
          <div className="mt-3">
            <button onClick={refetch} className="px-3 py-2 border rounded">
              Fetch another
            </button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-md font-medium">Notes</h3>
        <p className="text-sm text-gray-600">
          This app demonstrates reusable components, hooks, and an API call.
        </p>
      </section>
    </div>
  )
}
