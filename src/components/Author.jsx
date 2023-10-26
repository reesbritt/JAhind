import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author.png'
import { Expandable } from './Expandable'

function InstaIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}
function TwitterIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
    </svg>
  )
}

function EmailIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
    </svg>
  )
}

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover object-top"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="author-title">
              Author
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">JA Hind –</span> A bit about
              the author behind &apos;Humans in the Extreme&apos;.
            </p>
            <Expandable>
              {({ isExpanded }) => {
                const additionalText =
                  "This tragic account of human suffering, loss and fortitude has instilled in Jane a valuable life lesson. Not only in terms of the fragility of our existence, but also the indomitable spirit of the human being, when faced with their own mortality. Another humbling lesson that her grandfather’s incredible bravery has taught her is that where it may be easy to be selfless when things are going well, the real test is often when we are up against the odds. Although the circumstances that most of us will face in a lifetime will rarely come close to what happened to Jane’s Grandfather, the question as to what it is that drives one person to lay their life on the line for others and another to ‘abandon ship’, so to speak, is very much at the heart of her book, Humans in the Extreme. Her Grandfather’s resolution and compassion, in the face of 'extreme' has, she feels, also orientated her professionally."
                const additionalSecondParagraph =
                  'Prior to becoming a psychotherapist, Jane launched a career in nursing; supporting and navigating patients and their families through often life-changing traumas. Being able to make a difference in other people’s lives continues to be a major part of her work as a psychotherapist. In addition to her therapy work, Jane has also lectured students in counselling at Herts Regional College in Ware and facilitated training workshops for NHS staff and schools in Hertfordshire. Connecting with people from all walks of life who have often experienced the most difficult of circumstances remains an integral part of her work. Over the years, she has worked with victims of physical and/or sexual violence and offered clinical support to ex-offenders of violence and sexual abuse in a bid to reduce and manage any risk of them further offending. Whilst her encounters with perpetrators of violence have surged in recent years, so too has her interest to understand our human relationship with the extreme, in all its forms. It is because of this that Jane decided to move beyond the doorstep of her native subject psychology and explore those other influencing factors that can sway the human condition. By researching and reviewing the work of many renowned scientific and historical writers, she has been able to assemble a more comprehensive ‘take’ on the concept of extreme whilst putting a psychological frame to it.'
                return (
                  <>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                      Jane Amelda Hind was born in North London, England and is
                      the second youngest of seven children. Her parents,
                      Maureen and Charles Feeney, originated from Cleggan, which
                      is a small fishing village on the west coast of Ireland.
                      Where Cleggan holds much appeal – especially for writers
                      and artists, the most notable being the poet Richard
                      Murphy - it is also etched in tragedy. For it was on a
                      night in October 1927 that 45 local fishermen lost their
                      lives to a severe and most unexpected storm, now known as
                      ‘The Cleggan Bay Disaster’. Festus Feeney, the captain of
                      one of the fishing boats, was the only man able to steer
                      his boat home safely that night and, in doing so, saved
                      not just himself but also the lives of his entire crew.
                      This story has much pertinence to Jane because Festus
                      Feeney was her Grandfather.
                      <br />
                      {isExpanded && (
                        <>
                          {additionalText}
                          <br />
                          {additionalSecondParagraph}
                        </>
                      )}
                    </p>
                    {!isExpanded && (
                      <Expandable.Button>
                        Click here to read more
                      </Expandable.Button>
                    )}
                  </>
                )
              }}
            </Expandable>
            <p className="mt-8">
              <Link
                href="mailto:jane.hind@nhs.net"
                className="inline-flex items-center text-base font-medium tracking-tight text-slate-600"
              >
                <EmailIcon className="h-10 w-10 fill-current" />
                <span className="ml-4">Send an email</span>
              </Link>
            </p>
            <p className="mt-8 ">
              <Link
                href="https://www.instagram.com/humansintheextreme/"
                className="inline-flex items-center text-base font-medium tracking-tight text-violet-600"
              >
                <InstaIcon className="ml-1 h-8 w-8" />
                <span className="ml-4">Follow on Instagram</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
