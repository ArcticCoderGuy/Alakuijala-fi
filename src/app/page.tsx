'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'

type PageData = {
  id: number
  slug: string
  otsikko: string
  content: string
  published: boolean
  created_at: string
}

export default function Home() {
  const [pages, setPages] = useState<PageData[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPages() {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .eq('published', true)

      if (error) {
        setError(error.message)
      } else {
        setPages(data)
      }
    }

    fetchPages()
  }, [])

  if (error) return <div className="text-red-600">Virhe: {error}</div>
  if (!pages) return <div>Ladataan...</div>

  return (
    <>
      <HeroSection />
      <Services />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Supabase-sivut</h1>
        {pages.map((page) => (
          <div key={page.id} className="mb-6 border-b pb-4">
            <h2 className="text-xl font-semibold">{page.otsikko}</h2>
            <p className="text-gray-700">{page.content}</p>
          </div>
        ))}
      </main>
      <ContactForm />
    </>
  )

}
