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


export default function Home() {
  return (
    <>
      <Head>
        <title>
          J.A.Hind - Humans In The Extreme
        </title>
        <meta
          name="description"
          content="A website for the author JAHind to share her work, in particular her book Humans in the Extreme"
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <FreeChapters /> 
      <Pricing />
      <Themes />
      <Author />
      <Footer />
    </>
  )
}
