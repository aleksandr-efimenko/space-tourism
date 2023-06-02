import { motion } from 'framer-motion'
import { Crew } from '@/data/dataTypes'

export function CrewInfo({ crewMember }: { crewMember: Crew }) {
  return (
    <>
      <motion.p
        key={crewMember.role}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.4 }}
        className='heading4 opacity-50 md:mb-[0.9375rem] mb-2'
      >
        {crewMember.role}
      </motion.p>
      <motion.h3
        key={crewMember.name}
        className='heading3 md:mb-[27px] mb-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {crewMember.name}
      </motion.h3>
      <motion.p
        key={crewMember.bio.slice(0, 20)}
        className='text-paleblue md:max-w-[70%] md:m-auto lg:m-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {crewMember.bio}
      </motion.p>
    </>
  )
}
