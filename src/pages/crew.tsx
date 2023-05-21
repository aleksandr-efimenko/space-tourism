import data from '@/data/data.json'
import { WhiteDotsSlider } from '@/components/Sliders/WhiteDotsSlider'
import { useEffect, useState } from 'react'
import PageTitle from '@/components/PageTitle'
import CrewInfo from '@/components/Crew/CrewInfo'
import CrewImageSlider from '@/components/Crew/CrewImageSlider'
import PageContainer from '@/components/PageContainer'
import { BackgroundImage } from '@/components/BackgroundImage'
import bgImageDesktop from '~/assets/crew/background-crew-desktop.jpg'
import bgImageTablet from '~/assets/crew/background-crew-tablet.jpg'
import { useInterval } from '@/utils/useInterval'

export default function Crew() {
  const { crew } = data
  const [crewMemberIndex, setCrewMemberIndex] = useState(0)
  const [delay] = useState(5000)
  const [sliderIsRunning, setSliderIsRunning] = useState(true)

  useInterval(
    () => {
      setCrewMemberIndex((crewMemberIndex + 1) % crew.length)
    },
    sliderIsRunning ? delay : null
  )

  // this is used to reset the slider when the user switches to another image
  const handleSwitch = (index: number) => {
    setCrewMemberIndex(index)
    setSliderIsRunning(false)
    setTimeout(() => {
      setSliderIsRunning(true)
    }, delay * 2)
  }

  return (
    <>
      <PageContainer additionalClassNames='px-6'>
        <PageTitle number='02' title='Meet your crew' />
        <div
          className='flex flex-col-reverse justify-end items-center 
            row-start-3 row-end-4
          md:flex-col md:justify-start
          md:row-start-2 md:row-end-3 
          md:gap-10 md:mt-14 md:mb-10
          lg:gap-28 lg:items-start lg:col-start-2 lg:col-end-8'
        >
          <div className='mt-8 md:mt-0 h-full'>
            <CrewInfo crewMember={crew[crewMemberIndex]} />
          </div>
          <div className=''>
            <WhiteDotsSlider handleSwitch={handleSwitch} currentIndex={crewMemberIndex} itemsNumber={crew.length} />
          </div>
        </div>
        <div
          className='w-full overflow-hidden
          h-56 row-start-2 row-end-3 my-8
          md:h-full md:row-start-3 md:row-end-4 md:my-0
        lg:row-start-1 lg:row-end-4 lg:col-start-8 lg:col-end-12 '
        >
          <CrewImageSlider crewMember={crew[crewMemberIndex]} />
        </div>
      </PageContainer>
      <BackgroundImage backgroundImages={{ desktop: bgImageDesktop, mobile: bgImageTablet }} alt='background image' />
    </>
  )
}
