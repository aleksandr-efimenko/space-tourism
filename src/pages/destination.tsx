import data from '@/data/data.json'
import { use, useEffect, useState } from 'react'
import Image from 'next/image'
import { TextSlider } from '@/components/TextSlider'
import { PlanetInfoColumn } from '@/components/PlanetInfoColumn'
import { motion } from 'framer-motion'

export default function Destination() {
  const { destinations } = data
  const [destinationIndex, setDestinationIndex] = useState(0)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDestinationIndex((prev) => (prev + 1) % destinations.length)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [destinations])

  return (
    <>
      <div className='lg:page-container lg:grid lg:min-h-screen lg:pt-52 w-full md:pt-28'>
        <div className='lg:col-start-2 lg:col-end-6 flex flex-col gap-8 md:justify-between'>
          <h1 className='flex gap-6 md:pl-9'>
            <span className='heading5 font-bold opacity-25 '>01</span>
            <p className='heading5 '>Pick your destination</p>
          </h1>
          <motion.div
            key={destinations[destinationIndex].images.webp}
            initial={{ y: '-5rem', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex justify-center items-center w-full h-[75%]'
          >
            <div
              className=' relative z-10 w-[10.625rem] h-[10.625rem]
          md:w-[18.75rem] md:h-[18.75rem]
          lg:w-[27.8125rem] lg:h-[27.8125rem]'
            >
              <Image
                priority
                src={destinations[destinationIndex].images.webp}
                alt='destination '
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>{' '}
          </motion.div>
        </div>

        <div
          className='flex flex-col   items-center 
          md:mt-[3.3125rem] md:w-9/12 md:m-auto md:text-center
          lg:mt-16        lg:w-full  lg:items-start lg:text-left lg:col-start-7 lg:col-end-12'
        >
          <TextSlider
            items={destinations.map((item) => item.name)}
            currentIndex={destinationIndex}
            setIndex={setDestinationIndex}
          />
          <motion.h2
            key={destinations[destinationIndex].name}
            className='heading2 lg:mt-9 md:mt-8  lg:mb-[0.875rem] md:mb-2'
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
            className='w-full'
          >
            <hr className='border-gray border-1 md:mt-[3.0625rem] lg:mt-[3.375rem] md:mb-7' />
            <div className='flex gap-20 lg:justify-start md:justify-center'>
              <PlanetInfoColumn headerText='AVG. DISTANCE' bodyText={destinations[destinationIndex].distance} />
              <PlanetInfoColumn headerText='EST. TRAVEL TIME' bodyText={destinations[destinationIndex].travel} />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
