import { Destination } from '@/data/dataTypes'
import { motion } from 'framer-motion'
import { PlanetInfoColumn } from '../PlanetInfoColumn'

export type DestinationInfoProps = {
  destinations: Destination[]
  destinationIndex: number
}

export default function DestinationInfo({ destinations, destinationIndex }: DestinationInfoProps) {
  return (
    <>
      <motion.h2
        key={destinations[destinationIndex].name}
        className='heading2 
             mt-7 mb-[0.0625rem]
             md:mt-8 md:mb-2 
          lg:mt-9 lg:mb-[0.875rem]'
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
        <hr className='border-gray border-1 my-8 md:mt-[3.0625rem] lg:mt-[3.375rem] md:mb-7' />
        <div
          className='flex flex-col gap-8
            md:flex-row md:gap-20 md:justify-center
            lg:justify-start'
        >
          <PlanetInfoColumn headerText='AVG. DISTANCE' bodyText={destinations[destinationIndex].distance} />
          <PlanetInfoColumn headerText='EST. TRAVEL TIME' bodyText={destinations[destinationIndex].travel} />
        </div>
      </motion.div>
    </>
  )
}
