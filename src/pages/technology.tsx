import { NumberedSlider } from '@/components/Sliders/NumberedSlider'
import data from '@/data/data.json'
import { useEffect, useState } from 'react'
import PageTitle from '@/components/PageTitle'
import PageContainer from '@/components/PageContainer'
import TechnologyInfo from '@/components/Technology/TechnologyInfo'
import TechnologyImageSlider from '@/components/Technology/TechnologyImageSlider'
import { isMobile } from 'react-device-detect'
import { BackgroundImage } from '@/components/BackgroundImage'
import bgImageDesktop from '~/assets/technology/background-technology-desktop.jpg'
import bgImageTablet from '~/assets/technology/background-technology-tablet.jpg'

export default function Technology() {
  const { technology } = data
  const [technologyIndex, setTechnologyIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTechnologyIndex((prev) => (prev + 1) % technology.length)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [technology])

  return (
    <>
      <PageContainer>
        <PageTitle number='03' title='Space launch 101' />
        <div
          className='row-start-3 row-end-4 flex h-5/6
                  lg:row-auto lg:col-start-2 lg:col-end-9'
        >
          <div className='flex gap-[1.625rem] md:gap-[2.75rem] lg:gap-16  items-center flex-col lg:flex-row '>
            <NumberedSlider
              itemsNumber={technology.length}
              currentIndex={technologyIndex}
              setIndex={setTechnologyIndex}
            />
            <div className='lg:pr-4 lg:w-full'>
              <TechnologyInfo technology={technology[technologyIndex]} />
            </div>
          </div>
        </div>

        <TechnologyImageSlider
          className='relative w-full h-44
                      row-start-2 row-end-3 mt-8 mb-[2.125rem]
                      md:mt-[3.75rem] md:mb-14 md:h-80 
                      lg:row-start-1 lg:row-end-4 lg:h-full lg:my-0 
                      lg:col-start-9 lg:col-end-13'
          images={technology[technologyIndex].images}
          imageType={isMobile ? 'landscape' : 'portrait'}
        />
      </PageContainer>
      <BackgroundImage backgroundImage={isMobile ? bgImageTablet : bgImageDesktop} alt='background image' />
    </>
  )
}
