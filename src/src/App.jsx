import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'

export default function App() {
  const [name, setName] = useState('Student')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 flex-1">
        <Home name={name} setName={setName} />
      </main>
      <footer className="text-center p-4 text-sm text-gray-500">Week 3 Assignment</footer>
    </div>
  )
}
