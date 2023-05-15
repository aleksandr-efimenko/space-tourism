import data from '@/data/data.json'
import Image from 'next/image'
import { WhiteDotsSlider } from '@/components/WhiteDotsSlider'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import PageTitle from '@/components/PageTitle'

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
      <div
        className='w-full overflow-hidden
      lg:grid lg:page-container lg:justify-center lg:items-end '
      >
        <motion.div
          className='pt-52 pb-24 col-start-2 col-end-8 min-h-screen flex flex-col 
            justify-self-center justify-between items-start'
          key={crewMemberIndex + crew[crewMemberIndex].name}
        >
          <PageTitle number='02' title='Meet your crew' />
          <div>
            <motion.p
              key={crew[crewMemberIndex].role}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4 }}
              className='heading4 opacity-50 mb-[0.9375rem]'
            >
              {crew[crewMemberIndex].role}
            </motion.p>
            <motion.h3
              key={crew[crewMemberIndex].name}
              className='heading3 mb-[27px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {crew[crewMemberIndex].name}
            </motion.h3>
            <motion.p
              className='text-paleblue max-w-[70%]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {crew[crewMemberIndex].bio}
            </motion.p>
          </div>
          <div className=''>
            <WhiteDotsSlider setIndex={setCrewMemberIndex} currentIndex={crewMemberIndex} itemsNumber={crew.length} />
          </div>
        </motion.div>

        <motion.div
          key={crewMemberIndex}
          className='col-start-8 col-end-12 justify-self-start h-4/5 flex flex-col justify-end'
          initial={{ x: '5rem', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image priority src={crew[crewMemberIndex].images.webp} alt='crew member' width={480} height={700} />
        </motion.div>
      </div>
    </>
  )
}
