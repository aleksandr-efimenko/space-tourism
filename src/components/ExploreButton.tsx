import { motion } from 'framer-motion'
import Link from 'next/link'

export function ExploreButton() {
  return (
    <motion.a
      href='#'
      className='flex justify-center rounded-full items-center bg-white
                lg:w-[17.125rem] lg:h-[17.125rem] 
                md:w-[15.125rem] md:h-[15.125rem] 
                w-[9.375rem] h-[9.375rem] 
                '
      whileHover={{
        outlineColor: 'hsla(0, 0%, 100%, 0.1)',
        outlineStyle: 'solid',
        outlineWidth: '4rem',
      }}
      whileTap={{
        scale: 1.1,
        outlineWidth: '3rem',
      }}
    >
      <p className='heading4 md:tracking-[0.125rem] trackin-[0.0781rem] text-darkspace'>EXPLORE</p>
    </motion.a>
  )
}
