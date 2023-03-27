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
    title: 'Science & Emotion',
    chapterName: 'Science and Emotion',
    description:
      'Read a preview on the chapter `Science & Emotion`. Exploring the connection that both physical and emotional sciences have with extreme.' ,
    image: scienceImage,
    synopsis: 'Given that we humans generally like to believe that it is only us who hold a more complex and advanced capacity for emotional intelligence, a great many other species of animals also exhibit similar traits, albeit with variations. However, the question as to when this first took seed and what it was that set it all in motion remains unchartered territory. Evolution clearly helps us to understand the theory of our biology, yet the birth of our consciousness and the primal roots of our emotional intelligence are rarely studied in the same context. In fact, archaeologists of early prehistory seem reluctant to discuss the emotional drives of our ancient ancestors much earlier than 2.3 million years ago. Yet, as genetic mutation supposedly appears to be a biological evolutionary change that happens by chance over a period of time, the question as to why mutation occurred in the first place isn’t so clear to answer. For example, in the case of our earliest life form, when bacteria A somehow transitioned into bacteria B, resulting from genetic mutation, it would seem that this occurred by some kind of pre-programmed ‘by chance’ process. Is it possible that these ancient microorganisms’ impulsion to survive and evolve – under the most extreme conditions – may have been the catalyst to their mutating in the first place? If this innate impulse really did precipitate mutation, is mutation just the vehicle by which this process happened and the motivation to do so was some kind of conscious one?'
  },
  {
    title: 'Sex',
    chapterName: 'Sextreme',
    description:
      'Take a look into the chapter `Sextreme`. Exploring how our desire for extreme influences how we share the most intimate parts of our lives with one another.',
    image: sexImage,
    synopsis: 'From the different ways we have sex and with whom, to the number of times and where; when it comes to our sexual practices we humans manifest a variety of habits. What may be considered regular or acceptable to some therefore can just as easily be deemed abnormal or even repulsive to another. Whether the predilection presents itself in the more conventional or tinkers around the edges of the kinky or deviant, our sensual pleasures are as perplexing as they are diverse. Yet, if the impulse to engage in sexual practices of a more depraved kind becomes the obsession, an unprincipled and deeply malignant sexual appetite can soon manifest. Furthermore, with the steady spread of fantastical and extremely perverse sexual messages continuing to flood our computer screens, the question as to whether the distinction between fantasy sex and real-life sex is becoming more blurred for certain sections of the population is a pertinent one. And, where our attitudes towards sex have undoubtedly shifted over time, even if we don’t act out our fantasies in the real world, might our understanding of ‘normal’ and ‘deviant’ be changing? If so, what might the repercussions be?',
  },
  {
    title: 'Atrocities',
    chapterName: 'Humanocide',
    description:
      'The chapter `Humanocide` explores some of the parts of our extreme human history that although we should not be proud of, it is important to not ignore.',
    image: gravesImage,
    synopsis: 'Like the polarising points of a compass, we humans are a myriad of both the complex and diverse. As north is to south and east is to west, our navigation towards the extreme can drive us to commit the most reprehensible of human transgressions. In this chapter, a most violent and unyielding form of modern human is unveiled. Its unflinching no-holds barred narrative discusses the depraved aspects of our human nature, the perplexing reasons that drive us to do the terrible things we do and the repercussions this is having on our capacity to feel – even for a second. It is also here that the tone reaches a most disturbing, yet critical, point. By patently exposing the utter crudeness of governmental bodies and those who hold power as the main coordinators of campaigns of hatred and prejudice, the role of the ‘ordinary’ person is also heavily scrutinised. Without distorting the truth of the sciences, it profoundly examines the systems and processes that lead so-called ordinary people to commit appalling acts of violence or stand by and do nothing to stop them.'
  },
  {
    title: 'Technology',
    chapterName: 'Hacking away at Humanity',
    description:
      '`Hacking away at Humanity` is a chapter which explores how our desire for extreme presents itself through our relationship with technology.',
    image: hackingImage,
    synopsis: 'Being able to connect with anyone, anywhere in the world, within seconds, has become our ‘go-to’ recreation. Yet, is being so plugged in effectively plugging us out emotionally? With online connectivity having replaced the need for direct face-to-face expression, the vehicle in which aggression is now transported has taken on a whole new language. Re-tweeting things we like about each other and things we don’t has become a normal part of our digital culture. And, with an invisible arsenal of weaponry also at our disposal, we can pick someone up, or tear them down, at just a swipe of a finger. Yet, whilst we spend copious amounts of time communicating remotely, just how remote are we actually becoming? While we conduct ourselves covertly, from behind the safety of our screens, the reading of each other’s expressions is also becoming increasingly expendable. Even when we have offended, do we even feel bad, or is the concept of a guilty conscience also becoming a thing of the past? Digital passive aggression has become a very insidious weapon, one that can gatecrash every home, every room and every person, anywhere in the world – day or night. Whether this is done by the spread of disinformation, sending sarcastic texts, deliberately ignoring another’s text/email, or sub-tweeting, to those being targeted it moves way beyond the digital world.'
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
      id="themes"
      aria-labelledby="themes-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="themes-title">
          Themes
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Explore some of the themes that are explored within `Humans in the Extreme` by reading through some samples of chapters within the book.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Learn how to design your very first icons in a series of themes
          that will teach you everything you need to know to go from beginner to
          pro in just over an hour.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-y-6 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video, index) => {
            const liClassnames = activePane === index ? 'bg-blue-50 p-4 md:mb-80' : 'p-4';

            const details = activePane !== index ? null : (
              <div className='bg-blue-50 p-12 px-8 lg:px-32 tracking-tight text-slate-700 text-lg md:absolute md:left-0'>
                <p className='font-display text-4xl font-bold tracking-tight text-slate-900 pb-8'>{videos[activePane].chapterName}</p>
                <p>{videos[activePane].synopsis}</p>
              </div>
            )
            return (
            <>
              <li key={video.title} className={liClassnames} onClick={() => handleItemClick(index)}>
                <div
                  className="relative flex h-44 items-center justify-center rounded-2xl shadow-lg overflow-hidden"
                >
                    <Image src={video.image} alt="" unoptimized className='min-h-full' />
                </div>
                <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 ">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{video.description}</p>
                {details}
              </li>
            </>
          )
          })}
          {/* {activePane !== null && (
            <li key={videos[activePane].title} className='bg-blue-50 p-4' onClick={() => handleItemClick(activePane)}>
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl shadow-lg overflow-hidden"
              >
                  <Image src={videos[activePane].image} alt="" unoptimized className='min-h-full' />
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 ">
                {videos[activePane].title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{videos[activePane].description}</p>
            </li>
          )} */}
        </ol>
        {/* {activePane !== null && (
          <div className='bg-blue-50 p-12 px-8 lg:px-32 tracking-tight text-slate-700 text-lg'>
            <p className='font-display text-4xl font-bold tracking-tight text-slate-900 pb-8'>{videos[activePane].chapterName}</p>
            <p>{videos[activePane].synopsis}</p>
          </div>
        )} */}
      </Container>
    </section>
  )
}
