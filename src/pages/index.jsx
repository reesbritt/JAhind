import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Themes } from '@/components/Themes'
import { TableOfContents } from '@/components/TableOfContents'
import { Resources } from '@/components/Resources'


export default function Home() {

  return (
    <>
      <Head>
        <title>J A Hind - Humans in the Extreme</title>
        <meta
          name="description"
          content="The book, Humans in the Extreme, is a thought-provoking discourse about our obsession with the extreme, written by JA Hind."
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <FreeChapters /> 
      <Pricing />
      <Themes />
      <Resources/>
      <Author />
      <Footer />
    </>
  )
}
