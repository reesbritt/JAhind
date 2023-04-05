import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Chapters': {
    'From Nothing We Became': 1,
    'Our Extreme Birth – A Resoluteness to Survive': 2,
    'Our Ancestors – Savage or Civilised?' : 3,
    'HumAnimal' : 4,
    'Who Are We Now That We Are No Longer Prey?' : 5,
    'Sextreme': 6,
    'Humanocide – Human Evil in the Extreme' : 7,
    'The Rise and Demise of Ordinary People' : 8,
    'Propaganda' : 9,
    'Enablers and Bystanders' : 10,
    'The Dulling of our Conscience' : 11,
    'The Digital Revolution – Hacking Away at Humanity?' : 12,
    'Dehumanisation' : 13,
    'Choosing Humanity over Inhumanity' : 14,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Take a look at all of the content covered in the book.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        &apos;Humans in the Extreme&apos; is comprised of 240 pages of captivating and, at times, highly charged content, immersing you ever deeper into the mind-blowing intricacies of our human nature.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages)
                          .slice(0, isExpanded ? undefined : 4)
                          .map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
