import Image from 'next/image'
import { motion } from 'framer-motion'
import { Crew } from '@/data/dataTypes'

export default function CrewImageSlider({ crewMember }: { crewMember: Crew }) {
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
        />
      </motion.div>
    </>
  )
}
