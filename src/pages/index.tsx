import { ExploreButton } from '@/components/ExploreButton'
import MainPageInfo from '@/components/MainPage/MainPageInfo'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div
        className={`min-height-100vh  
        flex flex-col items-center justify-between text-center gap-8
        pt-28 pb-12
        md:w-[60%] md:mx-auto md:pt-[18%] md:pb-[9%]
        lg:w-full lg:text-left lg:py-[8.1875rem] lg:grid lg:page-container lg:justify-between lg:items-end`}
      >
        <div
          className='flex flex-col mx-auto w-[87%]
          lg:w-full
                    lg:col-start-2 lg:col-end-7'
        >
          <MainPageInfo />
        </div>
        <motion.div
          className='flex justify-center col-start-8 col-end-12'
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <ExploreButton />
        </motion.div>
      </div>
    </>
  )
}
