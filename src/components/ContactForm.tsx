'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { error } = await supabase.from('leads').insert({ email, message })
    if (!error) setSent(true)
  }

  return (
    <section className="p-12 bg-gray-100 text-black" id="contact">
      <h2 className="text-3xl font-bold mb-6">Ota yhteyttä</h2>
      {sent ? (
        <p>Viesti lähetetty! Otamme yhteyttä pian.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md">
          <input
            type="email"
            placeholder="Sähköposti"
            className="p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Viesti"
            className="p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">
            Lähetä
          </button>
        </form>
      )}
    </section>
  )
}
