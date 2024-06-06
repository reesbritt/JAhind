import { Container } from '@/components/Container'

export function IntroductionRebrand() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-4 sm:pb-20  "
    >
      <Container className="flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col">
          <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
            A text that will open your eyes to the patent compulsion we have for
            the extreme, our weakness to resist it and the consequences of this
            on humanity.
          </p>
          <p className="pt-4 text-center text-gray-800">
            Humans in the Extreme
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
            Compelling true crime series about the perilous landscape of modern
            dating, telling the stories of women who have survived horrific
            ordeals in abusive relationships or at the hands of conmen.
          </p>
          <p className="pt-4 text-center text-gray-800">Red Flag</p>
        </div>
      </Container>

      {/* <Container className="flex flex-col justify-evenly pb-8 text-center text-slate-700 md:flex-row">
        <div className="flex flex-col items-center justify-center p-4">
          <Link href="https://uktvplay.co.uk/shows/red-flag/watch-online/6350181205112">
            <Image src={coverImage} alt="Red Flags" cover />
            <p>Red Flags - Episode 1</p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Link href="https://uktvplay.co.uk/shows/red-flag/watch-online/6350278730112">
            <Image src={coverImage} alt="Red Flags" cover />
            <p>Red Flags - Episode 5</p>
          </Link>
        </div>
      </Container>
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          &apos;Humans in the Extreme&apos; will open your eyes to the patent
          compulsion we have for the extreme, our weakness to resist it and the
          consequences of this on humanity.
        </p>
        <p className="mt-4">
          &apos;Humans in the Extreme&apos; is a bracing and vital read and the
          first of its kind to expose the beguiling, yet deeply disturbing,
          fascination we have with the extreme. Author and psychotherapist, JA
          Hind, takes the reader into an unflinching no-holds barred discussion
          of the depraved aspects of our human nature, the perplexing reasons
          that drive us to do the terrible things we do and the repercussions
          this is having on our capacity to feel – even for a second. 
        </p>
        <p className="mt-4">
          Without distorting the truth of the sciences, &apos;Humans in the
          Extreme&apos; profoundly examines the systems and processes that lead
          so-called ordinary people to commit appalling acts of violence or
          stand by and do nothing to stop them. By unpicking the origins and
          revelations of extreme, as it has unfolded through the passage of
          time, this book encourages each of us to question our own affiliation
          with the extreme and the fundamental beliefs and constructs of the
          world that we have come to know.  Having garnered information from
          scientists, biologists, historians and psychologists alike,
          &apos;Humans in the Extreme&apos; crosses the divide between science
          and human emotion, making it not only a compelling read but also
          accessible to a wide audience of people.
        </p>
        <p className="mt-10">
          <Link
            href="#author"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Contact the author of &apos;Humans in the Extreme&apos;{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container> */}
    </section>
  )
}
