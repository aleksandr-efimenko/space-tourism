import { ExploreButton } from '@/components/ExploreButton'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className={`page-container min-h-screen w-full items-end justify-between py-[8.1875rem]`}>
        <div className='flex flex-col col-start-2 col-end-7'>
          <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2 }} className='heading5'>
            SO, YOU WANT TO TRAVEL TO
          </motion.p>
          <motion.h1
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
            className='heading1 my-6'
          >
            Space
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            className='text-paleblue'
          >
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </motion.p>
        </div>
        {/* <div className='col-start-7 col-end-9'></div> */}
        <motion.div
          className='flex justify-end col-start-8 col-end-12'
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
