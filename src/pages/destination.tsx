import data from '@/data/data.json'
import { useState } from 'react'
import Image from 'next/image'
import { TextSlider } from '@/components/TextSlider'
import { PlanetInfoColumn } from '@/components/PlanetInfoColumn'

export default function Destination() {
  const { destinations } = data
  const [destinationIndex, setDestinationIndex] = useState(0)

  return (
    <>
      <main className='flex flex-col items-center justify-between p-24 gap-24 w-full'>
        <h1 className='flex gap-6'>
          <span className='heading5 font-bold opacity-25 '>01</span>
          <p className='heading5 '>Pick your destination</p>
        </h1>
        <div className='flex justify-around gap-10 w-full'>
          <div className='flex-1 w-[27.8125rem] h-[27.8125rem]'>
            <Image
              src={destinations[destinationIndex].images.webp}
              alt='destination'
              width={445}
              height={445}
            />
          </div>
          <div className='flex flex-col flex-1'>
            <TextSlider
              items={destinations.map((item) => item.name)}
              currentIndex={destinationIndex}
              setIndex={setDestinationIndex}
            />
            <h2 className='heading2  mt-9 mb-[0.875rem]'>
              {destinations[destinationIndex].name}
            </h2>
            <p className='body-text text-paleblue'>
              {destinations[destinationIndex].description}
            </p>
            <hr className='border-gray border-1 mt-[3.375rem] mb-7 ' />
            <div className='flex gap-20'>
              <PlanetInfoColumn
                headerText='AVG. DISTANCE'
                bodyText={destinations[destinationIndex].distance}
              />
              <PlanetInfoColumn
                headerText='EST. TRAVEL TIME'
                bodyText={destinations[destinationIndex].travel}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
