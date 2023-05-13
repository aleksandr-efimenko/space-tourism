import { NumberedSlider } from '@/components/NumberedSlider'
import data from '@/data/data.json'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Technology() {
  const { technology } = data
  const [technologyIndex, setTechnologyIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTechnologyIndex((prev) => (prev + 1) % technology.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [technology])

  return (
    <>
      <div className='lg:grid lg:min-h-screen lg:page-container pt-52'>
        <div className='col-start-2 col-end-9'>
          <h1 className=' flex gap-6'>
            <span className='heading5 font-bold opacity-25'>03</span>
            <p className='heading5'>SPACE LAUNCH 101</p>
          </h1>

          <div className='flex items-center h-5/6'>
            <div className='flex gap-16'>
              <NumberedSlider
                itemsNumber={technology.length}
                currentIndex={technologyIndex}
                setIndex={setTechnologyIndex}
              />
              <div className='pr-4'>
                <motion.p
                  key={technologyIndex + technology[technologyIndex].name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className='nav-text text-paleblue mb-3'
                >
                  THE TERMINOLOGY…
                </motion.p>
                <motion.h2
                  key={technology[technologyIndex].name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className='heading3 mb-4'
                >
                  {technology[technologyIndex].name}
                </motion.h2>
                <motion.p
                  key={technology[technologyIndex].description.slice(0, 100)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className='text-paleblue max-w-[75%]'
                >
                  {technology[technologyIndex].description}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          key={technology[technologyIndex].images.portrait}
          initial={{ x: '-5rem', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='col-start-9 col-end-13 mt-6'
        >
          <Image alt='space explorer' src={technology[technologyIndex].images.portrait} width={515} height={527} />
        </motion.div>
      </div>
    </>
  )
}
