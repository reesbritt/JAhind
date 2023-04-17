import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import hackingImage from '@/images/themes/hacking.jpg'
import sexImage from '@/images/themes/intimate.jpg'
import scienceImage from '@/images/themes/science.jpg'
import gravesImage from '@/images/themes/graves.jpg'
import { useState } from 'react'

const videos = [
  {
    chapterName: 'Extreme & Us',
    image: scienceImage,
    color: 'bg-slate-500',
    synopsis: 'The word extreme represents so many different things to different people and our affiliation with it remains infinitely complex. From pulling off the most extraordinary, to committing the unimaginable, our relationship with the extreme is as baffling as it is disturbing. Irrespective of whether we ‘dabble’ in the phenomenal, the fanatical, the debauched, the deviant or the inhumane, just as soon as we break the back of one, an unrelenting fascination for even more ensues. One question remains, at what cost?'
  },
  {
    chapterName: 'Science and Emotion',
    image: scienceImage,
    color: 'bg-slate-700',
    synopsis: 'With science and emotion being particular features of our human species, are they really as polarised from each other as we generally like to think? Just as much as science represents rationale and logic, through observation and analysis, without the emotional drive to understand such matters, studying things for research purposes just wouldn’t happen, surely? Yet, where our ability to speak, think and emotionalise clearly sets us aside from every other living species, the birth of our consciousness and the primal roots of our emotional intelligence are rarely studied to the same degree. The questions as to when our emotional intelligence first took seed and what it was that set it all in motion remains unchartered territory – until now that is.'
  },
  {
    chapterName: 'Sextreme',
    image: sexImage,
    color: 'bg-slate-900',
    synopsis: 'Our hunger for the extreme has many hooks with which to reel us in. Yet, once that line has been cast, an unrelenting fascination for more can soon take over - leading us to commit the most harrowing of acts. Whether we satisfy our craving through greed, power, pleasure or pain, going way beyond the limits of normal, reasonable and acceptable and into the realms of the darker recesses of extreme can soon become the bait – if we let it.',
  },
  {
    chapterName: 'Hacking away at Humanity',
    image: hackingImage,
    color: 'bg-slate-500',
    synopsis: 'AI has become an iconic catchphrase to describe the artificial intelligence of technology. Having been created by humans, to learn and mimic the actions of humans, it can distinguish, simulate and perform human-like tasks. So, what might the cost of such limitless technological capability be having on humanity? Not only does AI let neither fear nor hesitation get in its way, it also has no conscience!'
  },
  {
    chapterName: 'Humanocide',
    image: gravesImage,
    color: 'bg-slate-700',
    synopsis: 'Given that hostile attitudes will often breed hostile behaviour, during the early stages of most conflicts – where such feelings as fear, distrust and hatred are often at the epicentre – a further demeaning, in the form of name-calling, will often be the precursor to physical attack. Woefully, too, given that the mistreatment of one person can all too often lead to the mistreatment of many more, doesn’t the more times we ‘sit on the fence’ make the getting off it all the more hard? The coordination of masses of people from one group to go against a minority of people from another is generally how the seeds of dehumanisation germinate. By stigmatising the ‘person/group’ as bad, evil or inferior, the descent from humane to inhumane has already begun.'
  },

]

export function Themes() {

  const [activePane, setActivePane] = useState(null);

  const handleItemClick = (index) => {
    if(index === activePane) {
      setActivePane(null)
    } else {
      setActivePane(index)
    }
  }
  return (
    <section
      id="preview"
      aria-labelledby="themes-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20"
    >
      <Container>
        <SectionHeading number="3" id="themes-title">
          Preview
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Take a look at some sample passages from within the chapters of &apos;Humans in the Extreme&apos; below.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        Preview one of the chapter samples by selecting one of them from the list.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-y-6 gap-x-8 [counter-reset:video] lg:grid-cols-5"
        >
          {videos.map((video, index) => {
            const liClassnames = activePane === index ? 'bg-blue-50 p-4 md:mb-80' : 'p-4';
            const details = activePane !== index ? <div/> : (
              <div className='bg-blue-50 p-12 px-8 lg:px-32 tracking-tight text-slate-700 text-lg lg:absolute md:left-0'>
                <p className='font-display text-4xl font-bold tracking-tight text-slate-900 pb-8'>{videos[activePane].chapterName}</p>
                <p>{videos[activePane].synopsis}</p>
              </div>
            )

            const boxClassnames = `cursor-pointer relative flex h-44 items-center justify-center rounded-2xl shadow-lg overflow-hidden ${video.color}`
            return (
              <li key={video.chapterName} className={liClassnames} onClick={() => handleItemClick(index)}>
                <div className={boxClassnames}>
                  <h2 className="text-center text-white text-xl tracking-tight text-white before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 ">
                    {video.chapterName}
                  </h2>                
                </div>

                {details}
              </li>
          )
          })}
        </ol>
      </Container>
    </section>
  )
}
