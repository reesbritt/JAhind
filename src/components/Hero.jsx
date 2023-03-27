import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/cover.png'
import Countdown from 'react-countdown'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-blue-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          “An outstanding addition to our knowledge about the human race and our relationship with the extreme.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-blue-600 before:content-['—_']">
          Prof Michael Kirby FRCP
        </strong>
        <br/>
        Editor - Trends in urology & Mens health
      </figcaption>
    </figure>
  )
}

const renderCountdown = ({ completed, days, hours, minutes }) => {
  if(completed) {
    return <p>Out Now!</p>
  }
  return <p className='text-3xl text-slate-900 text-center font-bold'>{days} days {hours} hours {minutes} minutes</p>
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 xl:pb-32">
        <div className="relative flex flex-col items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-white shadow-xl md:w-80 lg:w-full xl:px-2">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
          <div className='p-4 bg-white relative mt-4 z-10 mx-auto flex flex-col w-64 rounded-xxl shadow-xl md:w-80 lg:w-full'>
            <p className='text-3xl text-slate-900 text-center pb-2 '>Releases 1st May</p>
            <Countdown date={new Date('2023-05-01')} renderer={renderCountdown}/>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
            A journey into the chiselling away of our humanity.
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
             A thought-provoking discourse about our obsession with the extreme, written by J.A Hind.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="#free-chapters" color="blue">
                Keep me updated
              </Button>
              <Button href="#pricing" variant="outline" color="blue">
                Buy a copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
