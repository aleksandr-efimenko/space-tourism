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
import { useInterval } from '@/utils/useInterval'
import Head from 'next/head'

export default function Destination() {
  const { destinations } = data
  const [destinationIndex, setDestinationIndex] = useState(0)
  const [delay] = useState(5000)
  const [sliderIsRunning, setSliderIsRunning] = useState(true)

  useInterval(
    () => {
      setDestinationIndex((destinationIndex + 1) % destinations.length)
    },
    sliderIsRunning ? delay : null
  )

  // this is used to reset the slider when the user switches to another image
  const handleSwitch = (index: number) => {
    setDestinationIndex(index)
    setSliderIsRunning(false)
    setTimeout(() => {
      setSliderIsRunning(true)
    }, delay * 2)
  }

  return (
    <>
      <Head>
        <title>Space tourism website | Destination</title>
        <meta property='og:title' content='Space tourism website | Destination' key='title' />
      </Head>
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
            handleSwitch={handleSwitch}
          />
          <DestinationInfo destination={destinations[destinationIndex]} />
        </div>
      </PageContainer>
      <BackgroundImage backgroundImages={{ desktop: bgImageDesktop, mobile: bgImageTablet }} alt='background image' />
    </>
  )
}
