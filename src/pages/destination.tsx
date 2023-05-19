import data from '@/data/data.json'
import { useEffect, useState } from 'react'
import { TextSlider } from '@/components/TextSlider'
import PageTitle from '@/components/PageTitle'
import PageContainer from '@/components/PageContainer'
import DestinationInfo from '@/components/Destination/DestinationInfo'
import DestinationImageSlider from '@/components/Destination/DestinationImageSlider'

export default function Destination() {
  const { destinations } = data
  const [destinationIndex, setDestinationIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setDestinationIndex((prev) => (prev + 1) % destinations.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [destinations])

  return (
    <>
      <PageContainer>
        <div
          className='flex flex-col 
             items-center gap-8
          md:items-start md:justify-between 
          lg:gap-0 lg:justify-start lg:col-start-2 lg:col-end-6 '
        >
          <PageTitle number='01' title='Pick your destination' />
        </div>
        <DestinationImageSlider destination={destinations[destinationIndex]} />

        <div
          className='flex flex-col   items-center 
            mt-[26px]
          md:mt-[3.3125rem] md:w-9/12 md:m-auto md:text-center
          lg:mt-16        lg:w-full  lg:items-start lg:text-left lg:col-start-7 lg:col-end-12'
        >
          <TextSlider
            items={destinations.map((item) => item.name)}
            currentIndex={destinationIndex}
            setIndex={setDestinationIndex}
          />
          <DestinationInfo destinations={destinations} destinationIndex={destinationIndex} />
        </div>
      </PageContainer>
    </>
  )
}
