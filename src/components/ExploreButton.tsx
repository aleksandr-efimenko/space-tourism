import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect'

export function ExploreButton() {
  const whilteHoverStyle = {
    outlineColor: 'hsla(0, 0%, 100%, 0.1)',
    outlineStyle: 'solid',
    outlineWidth: isMobile ? '1rem' : '4rem',
  }
  const whileTapStyle = {
    scale: 1.1,
    outlineWidth: isMobile ? '1rem' : '3rem',
  }

  return (
    <motion.a
      href='#'
      className='flex justify-center rounded-full items-center bg-white
                lg:w-[17.125rem] lg:h-[17.125rem] 
                md:w-[15.125rem] md:h-[15.125rem] 
                w-[9.375rem] h-[9.375rem] 
                '
      whileHover={whilteHoverStyle}
      whileTap={whileTapStyle}
    >
      <p className='explore-button text-darkspace'>EXPLORE</p>
    </motion.a>
  )
}
