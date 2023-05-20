import data from '@/data/data.json'
import { useEffect, useState } from 'react'
import { TextSlider } from '@/components/Sliders/TextSlider'
import PageTitle from '@/components/PageTitle'
import PageContainer from '@/components/PageContainer'
import DestinationInfo from '@/components/Destination/DestinationInfo'
import DestinationImageSlider from '@/components/Destination/DestinationImageSlider'

export default function Destination() {
  const { destinations } = data
  const [destinationIndex, setDestinationIndex] = useState(0)

  return (
    <>
      <PageContainer>
        <PageTitle number='01' title='Pick your destination' />
        <div
          className=' mt-8
        md:mt-[3.75rem] 
        lg:mt-0 lg:col-start-2 lg:col-end-6 lg:row-start-2 lg:row-end-3'
        >
          <DestinationImageSlider destination={destinations[destinationIndex]} />
        </div>
        <div
          className='flex flex-col items-center h-full justify-center
            mt-[1.625rem] px-6
            md:px-0 md:pt-[3.3125rem] md:w-9/12 md:m-auto md:text-center
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
    </>
  )
}
