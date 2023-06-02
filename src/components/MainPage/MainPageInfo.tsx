import { motion } from 'framer-motion'

export function MainPageInfo() {
  return (
    <>
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
        className='body-text text-paleblue lg:max-w-md'
      >
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
        on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </motion.p>
    </>
  )
}
