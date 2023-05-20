import data from '@/data/data.json'
import { useEffect, useState } from 'react'
import { TextSlider } from '@/components/Sliders/TextSlider'
import PageTitle from '@/components/PageTitle'
import PageContainer from '@/components/PageContainer'
import DestinationInfo from '@/components/Destination/DestinationInfo'
import DestinationImageSlider from '@/components/Destination/DestinationImageSlider'
import { BackgroundImage } from '@/components/BackgroundImage'
import bgImageDesktop from '~/assets/destination/background-destination-desktop.jpg'
import bgImageTablet from '~/assets/destination/background-destination-tablet.jpg'
import { useMediaQuery } from 'react-responsive'

export default function Destination() {
  const { destinations } = data
  const [destinationIndex, setDestinationIndex] = useState(0)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <>
      <PageContainer additionalClassNames='px-6'>
        <PageTitle number='01' title='Pick your destination' />
        <div
          className=' mt-8
        md:mt-[3.75rem] 
        lg:mt-0 lg:col-start-2 lg:col-end-6 lg:row-start-2 lg:row-end-3'
        >
          <DestinationImageSlider destination={destinations[destinationIndex]} />
        </div>
        <div
          className='flex flex-col items-center h-full justify-start
            pt-[1.625rem]
            md:px-0 md:pt-[2rem] md:pb-4 md:w-9/12 md:m-auto md:text-center
          lg:mt-0       lg:w-full  lg:items-start lg:text-left lg:col-start-7 lg:col-end-12 lg:row-start-1 lg:row-end-3'
        >
          <TextSlider
            items={destinations.map((item) => item.name)}
            currentIndex={destinationIndex}
            setIndex={setDestinationIndex}
          />
          <DestinationInfo destination={destinations[destinationIndex]} />
        </div>
      </PageContainer>
      <BackgroundImage backgroundImage={isTabletOrMobile ? bgImageTablet : bgImageDesktop} alt='background image' />
    </>
  )
}
