import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/red-flags.jpeg'
import Link from 'next/link'

function MobileQuote() {
  return (
    <figure className="relative mx-auto max-w-md  text-center lg:hidden">
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          A piece of text here introducing the show and JA Hind&apos;s role in
          the show
        </p>
      </blockquote>
      <figcaption className="mt-2 pb-10 text-sm text-slate-500">
        <Link href="https://uktvplay.co.uk/shows/red-flag/watch-online/6350181205112">
          <Button className="rounded-lg border bg-white text-black text-black hover:bg-gray-100">
            Watch Online
          </Button>
        </Link>
      </figcaption>
    </figure>
  )
}

export function HeroFlags() {
  return (
    <header className="mb-4 overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 xl:pb-32">
        <div className="relative flex flex-col items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 right-0 left-1/2 z-10 rounded-bl-6xl bg-red-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-full lg:right-[-100vw] lg:-ml-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
            <p className="mt-[200px] ml-[250px] hidden w-2/5 font-display text-4xl font-bold tracking-tight text-white lg:block">
              An insight into the dangers of the modern day dating world.
            </p>
            <Link
              href="https://uktvplay.co.uk/shows/red-flag/watch-online/6350181205112"
              className="absolute left-[27%] top-3/4 z-20 mx-auto hidden lg:block "
            >
              <Button className="rounded-lg border bg-white text-black text-black hover:bg-gray-100">
                Watch Online
              </Button>
            </Link>
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-white shadow-xl md:w-80 lg:w-full ">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <MobileQuote />
      </div>
    </header>
  )
}
