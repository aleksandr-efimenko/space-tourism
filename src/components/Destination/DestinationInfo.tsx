import { Destination } from '@/data/dataTypes'
import { motion } from 'framer-motion'
import { PlanetInfoColumn } from '../PlanetInfoColumn'

export default function DestinationInfo({ destination }: { destination: Destination }) {
  return (
    <>
      <motion.h2
        key={destination.name}
        className='heading2 
             mt-7 mb-[0.0625rem]
             md:mt-8 md:mb-2 
          lg:mt-9 lg:mb-[0.875rem]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {destination.name}
      </motion.h2>
      <motion.p
        key={destination.description}
        className='body-text text-paleblue'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {destination.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        key={destination.distance}
        className='w-full'
      >
        <hr
          className='border-gray border-1 my-8 
                      md:mt-[3.0625rem] md:mb-7 
                      lg:mt-[3.375rem] '
        />
        <div
          className='flex flex-col    gap-8
                       md:flex-row md:gap-20 md:justify-center
                                   lg:gap-0  lg:justify-start'
        >
          <div className='flex-1 w-full'>
            <PlanetInfoColumn headerText='AVG. DISTANCE' bodyText={destination.distance} />
          </div>
          <div className='flex-1 w-full'>
            <PlanetInfoColumn headerText='EST. TRAVEL TIME' bodyText={destination.travel} />
          </div>
        </div>
      </motion.div>
    </>
  )
}
