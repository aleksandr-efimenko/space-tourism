import { NumberedSlider } from '@/components/NumberedSlider'
import data from '@/data/data.json'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PageTitle from '@/components/PageTitle'
import PageContainer from '@/components/PageContainer'
import TechnologyInfo from '@/components/TechnologyInfo'

export default function Technology() {
  const { technology } = data
  const [technologyIndex, setTechnologyIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTechnologyIndex((prev) => (prev + 1) % technology.length)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [technology])

  return (
    <>
      <PageContainer>
        <div className='lg:col-start-2 lg:col-end-9'>
          <PageTitle number='03' title='Space launch 101' />
          <div className='flex items-center h-5/6'>
            <div className='flex gap-16'>
              <NumberedSlider
                itemsNumber={technology.length}
                currentIndex={technologyIndex}
                setIndex={setTechnologyIndex}
              />
              <div className='pr-4'>
                <TechnologyInfo technology={technology} technologyIndex={technologyIndex} />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          key={technology[technologyIndex].images.portrait}
          initial={{ x: '-5rem', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='lg:col-start-9 lg:col-end-13 lg:mt-6'
        >
          <Image alt='space explorer' src={technology[technologyIndex].images.portrait} width={515} height={527} />
        </motion.div>
      </PageContainer>
    </>
  )
}
