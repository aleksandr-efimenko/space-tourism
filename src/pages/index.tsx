import { ExploreButton } from '@/components/ExploreButton'
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
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className='heading5 text-paleblue'
          >
            SO, YOU WANT TO TRAVEL TO
          </motion.p>
          <motion.h1
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
            className='heading1 my-4 md:my-6'
          >
            Space
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            className='body-text text-paleblue'
          >
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </motion.p>
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
