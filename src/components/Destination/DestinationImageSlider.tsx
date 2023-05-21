import Image from 'next/image'
import { motion } from 'framer-motion'
import { Destination } from '@/data/dataTypes'
import blurDestinationImage from '~/assets/destination/blur-destination-image.jpg'
import { useState } from 'react'

export default function DestinationImageSlider({ destination }: { destination: Destination }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <>
      <motion.div
        key={destination.images.webp}
        initial={{ y: '-5rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center items-center w-full'
      >
        <div
          className=' relative z-10 w-[10.625rem] h-[10.625rem]
          md:w-[18.75rem] md:h-[18.75rem]
          lg:w-[27.8125rem] lg:h-[27.8125rem]'
        >
          <Image
            src={destination.images.webp}
            alt={`image of ${destination.name}`}
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            className={`
            duration-500 ease-in-out group-hover:opacity-75
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'})`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </motion.div>
    </>
  )
}
