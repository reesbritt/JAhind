import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          “Humans in the extreme” is a book that explores humanity and how it revolves around extreme in all areas.
        </p>
        <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros. Morbi finibus, sem et aliquet accumsan, justo odio finibus orci, id vulputate erat enim vitae libero. Suspendisse egestas vitae est id porttitor. Nunc at dictum sem. Nullam ultricies id metus nec blandit. Donec ac nunc in velit vestibulum maximus non sed sapien. Vestibulum eu erat rhoncus magna imperdiet laoreet. Pellentesque ut massa nec elit ullamcorper interdum. 
        </p>
        <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros.
        </p>
        <p className="mt-4">
          In “Humans in the extreme”, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the book, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a velit eros.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
