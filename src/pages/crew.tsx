import data from '@/data/data.json'
import Image from 'next/image'
import { WhiteDotsSlider } from '@/components/WhiteDotsSlider'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Crew() {
  const { crew } = data
  const [crewMemberIndex, setCrewMemberIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCrewMemberIndex((prev) => (prev + 1) % crew.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [crew]);
  return (
    <>
      <div className='pt-32 flex justify-center item w-full'>
        <AnimatePresence>
          <motion.div
            className='flex-1'
            key={crewMemberIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0, }}
            transition={{ delay: 0.2 }}
          >
            <h1 className='flex gap-6'>
              <span className='heading5 font-bold opacity-25'>02</span>
              <p className='heading5'> Meet your crew</p>
            </h1>
            <motion.p
              key={crew[crewMemberIndex].role}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className='heading4 opacity-50'
            >
              {crew[crewMemberIndex].role}
            </motion.p>
            <motion.h3
              key={crew[crewMemberIndex].name}
              className='heading3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              {crew[crewMemberIndex].name}
            </motion.h3>
            <motion.p
              className='text-paleblue'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              transition={{ delay: 0.8 }}
            >
              {crew[crewMemberIndex].bio}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={crewMemberIndex}
            className='flex-1'
            initial={{ x: '-10vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            // exit={{}}
          >
            <Image src={crew[crewMemberIndex].images.webp} alt='crew member' width={400} height={400} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='absolute bottom-10'>
        <WhiteDotsSlider setIndex={setCrewMemberIndex} currentIndex={crewMemberIndex} itemsNumber={crew.length} />
      </div>
    </>
  )
}
