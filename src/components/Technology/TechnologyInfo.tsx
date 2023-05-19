import { Technology } from '@/data/dataTypes'
import { motion } from 'framer-motion'

export default function TechnologyInfo({ technology }: { technology: Technology }) {
  return (
    <>
      <motion.p
        key={technology.description.slice(0, 10) + technology.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='nav-text text-paleblue mb-[0.5625rem] lg:mb-3 md:mb-4'
      >
        THE TERMINOLOGY…
      </motion.p>
      <motion.h2
        key={technology.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className='heading3 mb-4'
      >
        {technology.name}
      </motion.h2>
      <motion.p
        key={technology.description.slice(0, 50)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className='text-paleblue max-w-[75%] mx-auto lg:mx-0'
      >
        {technology.description}
      </motion.p>
    </>
  )
}
