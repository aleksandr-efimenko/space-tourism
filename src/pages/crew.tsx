import data from '@/data/data.json'
import Image from 'next/image'
import { WhiteDotsSlider } from '@/components/WhiteDotsSlider'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Crew() {
  const { crew } = data
  const [crewMemberIndex, setCrewMemberIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCrewMemberIndex((prev) => (prev + 1) % crew.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [crew])
  return (
    <>
      <div className='grid gap-16 grid-cols-12 min-h-screen justify-center items-end w-full'>
        <AnimatePresence>
          <motion.div
            className='pt-32 pb-24 col-start-2 col-end-7 min-h-full flex flex-col justify-self-center justify-between items-start'
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
            <div>
              <motion.p
                key={crew[crewMemberIndex].role}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                // exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
                className='heading4 opacity-50'
              >
                {crew[crewMemberIndex].role}
              </motion.p>
              <motion.h3
                key={crew[crewMemberIndex].name}
                className='heading3 mt-[0.9375rem] mb-[27px]'
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
            </div>
            <div className=''>
              <WhiteDotsSlider setIndex={setCrewMemberIndex} currentIndex={crewMemberIndex} itemsNumber={crew.length} />
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={crewMemberIndex}
            className='col-start-7 col-end-12 justify-self-end'
            initial={{ x: '-10vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            // exit={{}}
          >
            <Image src={crew[crewMemberIndex].images.webp} alt='crew member' width={450} height={700} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
