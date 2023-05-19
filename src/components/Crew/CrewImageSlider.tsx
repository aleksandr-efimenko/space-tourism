import Image from 'next/image'
import { motion } from 'framer-motion'
import { Crew } from '@/data/dataTypes'

export default function CrewImageSlider({ crewMember }: { crewMember: Crew }) {
  return (
    <>
      <motion.div
        key={crewMember.name}
        className='col-start-8 col-end-12 justify-self-start h-4/5 flex flex-col justify-end'
        initial={{ x: '5rem', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image priority src={crewMember.images.webp} alt={`crew member ${crewMember.role}`} width={480} height={700} />
      </motion.div>
    </>
  )
}
