import data from '@/data/data.json'
import { use, useEffect, useState } from 'react'
import Image from 'next/image'
import { TextSlider } from '@/components/TextSlider'
import { PlanetInfoColumn } from '@/components/PlanetInfoColumn'
import { motion } from 'framer-motion'

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
      <div className='page-container pt-52 w-full'>
        <div className='col-start-2 col-end-6 flex flex-col'>
          <h1 className='flex gap-6'>
            <span className='heading5 font-bold opacity-25 '>01</span>
            <p className='heading5 '>Pick your destination</p>
          </h1>
          <motion.div
            key={destinations[destinationIndex].images.webp}
            initial={{ y: '-5rem', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex justify-center items-center h-full'
          >
            <Image src={destinations[destinationIndex].images.webp} alt='destination' width={445} height={445} />
          </motion.div>
        </div>

        <div className='flex flex-col mt-16 col-start-7 col-end-12'>
          <TextSlider
            items={destinations.map((item) => item.name)}
            currentIndex={destinationIndex}
            setIndex={setDestinationIndex}
          />
          <motion.h2
            key={destinations[destinationIndex].name}
            className='heading2  mt-9 mb-[0.875rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {destinations[destinationIndex].name}
          </motion.h2>
          <motion.p
            key={destinations[destinationIndex].description}
            className='body-text text-paleblue'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {destinations[destinationIndex].description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            key={destinations[destinationIndex].distance}
          >
            <hr className='border-gray border-1 mt-[3.375rem] mb-7 ' />
            <div className='flex gap-20'>
              <PlanetInfoColumn headerText='AVG. DISTANCE' bodyText={destinations[destinationIndex].distance} />
              <PlanetInfoColumn headerText='EST. TRAVEL TIME' bodyText={destinations[destinationIndex].travel} />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
