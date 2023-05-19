import Image from 'next/image'
import { motion } from 'framer-motion'
import { Destination } from '@/data/dataTypes'

export default function DestinationImageSlider({ destination }: { destination: Destination }) {
  return (
    <>
      <motion.div
        key={destination.images.webp}
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
            src={destination.images.webp}
            alt={`image of ${destination.name}`}
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </motion.div>
    </>
  )
}
