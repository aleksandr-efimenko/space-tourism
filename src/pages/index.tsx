import { ExploreButton } from '@/components/ExploreButton'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className={`flex min-h-screen flex-col items-center justify-between p-24`}>
        <div className='flex flex-col'>
          <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2 }} className='heading5'>
            SO, YOU WANT TO TRAVEL TO
          </motion.p>
          <motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.4 }} className='heading1'>
            Space
          </motion.h1>
          <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.6 }} className=''>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </motion.p>
        </div>
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.8 }}>
          <ExploreButton />
        </motion.div>
      </div>
    </>
  )
}
