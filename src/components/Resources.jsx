import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'Mix 92.6 Radio Interview',
    description:
      'Listen to a 10 minute radio interview about Humans in the extreme, with author JA Hind.',
    image: function FigmaImage() {
      return (
        <><iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1502094901%3Fsecret_token%3Ds-ZYWy80aZ5Qh&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <div style={{fontSize: '10px', color: '#cccccc',lineBreak: 'anywhere', wordBreak: 'normal',overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}>
          <a href="https://soundcloud.com/jahind" title="JA Hind" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}} rel="noreferrer">JA Hind</a> · 
          <a href="https://soundcloud.com/jahind/jahind-human-in-the-extreme-radio-interview/s-ZYWy80aZ5Qh" title="JAHind- Human in the Extreme - Radio Interview" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}} rel="noreferrer">JAHind- Human in the Extreme - Radio Interview</a></div></>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="4" id="resources-title">
          Media
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Learn more about Humans in the Extreme by exploring some more media from JA Hind.
        </p>
        {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
          Want to know a bit more? Explore some of the content below to discover
        </p> */}
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          <li></li>
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
          <li></li>
        </ol>
      </Container>
    </section>
  )
}
