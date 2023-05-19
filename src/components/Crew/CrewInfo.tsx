import { motion } from 'framer-motion'
import { Crew } from '@/data/dataTypes'

export default function CrewInfo({ crewMember }: { crewMember: Crew }) {
  return (
    <>
      <motion.p
        key={crewMember.role}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.4 }}
        className='heading4 opacity-50 mb-[0.9375rem]'
      >
        {crewMember.role}
      </motion.p>
      <motion.h3
        key={crewMember.name}
        className='heading3 mb-[27px]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {crewMember.name}
      </motion.h3>
      <motion.p
        className='text-paleblue max-w-[70%]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {crewMember.bio}
      </motion.p>
    </>
  )
}
