import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { HeroFlags } from '@/components/Hero-flags'
import { IntroductionRebrand } from '@/components/Introduction-rebrand'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { TableOfContents } from '@/components/TableOfContents'
import { Themes } from '@/components/Themes'
import { Header } from '@/components/header'

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
      <Header />
      <Author />
      <IntroductionRebrand />
      <HeroFlags />
      <Hero />
      <NavBar />
      <TableOfContents />
      <Pricing />
      <Themes />
      <Resources />
      <Footer />
    </>
  )
}
