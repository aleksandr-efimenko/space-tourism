import Image from 'next/image'
import { motion } from 'framer-motion'
import { Crew } from '@/data/dataTypes'
import { useState } from 'react'

export default function CrewImageSlider({ crewMember }: { crewMember: Crew }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      <motion.div
        key={crewMember.name}
        className='justify-self-start flex flex-col justify-end h-full w-full relative'
        initial={{ x: '5rem', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          priority
          src={crewMember.images.webp}
          alt={`crew member ${crewMember.role}`}
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'bottom',
          }}
          className={`
          duration-500 ease-in-out group-hover:opacity-75
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'})`}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className='block md:hidden w-full'>
          <hr className='border-gray border-1' />
        </div>
      </motion.div>
    </>
  )
}
