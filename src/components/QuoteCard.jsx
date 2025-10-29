import React from 'react'

export default function QuoteCard({ quote, author }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-lg italic">“{quote}”</p>
      <p className="mt-2 text-right text-sm text-gray-600">— {author}</p>
    </div>
  )
}
