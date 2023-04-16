import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

function Plan({ name, description, price, features, href, featured }) {
  return (
    <div
      className={clsx(
        'relative py-16 sm:rounded-5xl md:py-12 px-4',
        !featured && 'md:px-0',
        featured && 'bg-blue-600 sm:shadow-lg px-4 sm:px-10 lg:px-12 md:ml-12'
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            !featured && 'md:text-center',
            featured ? 'text-white' : 'text-slate-900'
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            !featured && 'md:text-center',
            featured ? 'text-white' : 'text-slate-600'
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem] leading-tight',
              featured ? 'text-blue-200' : 'text-slate-500'
            )}
          >
            £
          </span>
          <span
            className={clsx(
              'ml-1 mt-1 text-4xl md:text-5xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900'
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900'
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600'
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Buy now
        </Button>
        {!featured && <p className='text-sm text-slate-900 font-bold text-center mt-4'>Ebook and Audio versions coming soon</p>}
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <SectionHeading number="2" id="pricing-title">
          Pricing
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Get your copy
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
        &apos;Humans in the Extreme&apos; is available to purchase as a physical book, an ebook, or alternatively as an audiobook through audible.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Ebook/Audiobook/Physical edition"
            description="Purchase a single copy of either the Ebook, audiobook or physical copy of the book via Amazon"
            price={'4.99/12.99/18.02'}
            href="https://www.amazon.co.uk/Humans-Extreme-gripping-darkest-recesses/dp/1789633621"
            features={[]}
          />
          <Plan
            featured
            name="Waterstones: Physical edition"
            description="Purchase the physical edition via Waterstones"
            price={'14.99'}
            href="https://www.waterstones.com/book/humans-in-the-extreme/j-a-hind/9781789633627"
            features={[]}
          />
        </div>
      </div>
    </section>
  )
}
