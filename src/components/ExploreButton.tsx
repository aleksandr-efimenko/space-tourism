import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

export function ExploreButton({ onClick }: { onClick: () => void }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  const whilteHoverStyle = {
    outlineColor: 'hsla(0, 0%, 100%, 0.1)',
    outlineStyle: 'solid',
    outlineWidth: isTabletOrMobile ? '1rem' : '4rem',
  }
  const whileTapStyle = {
    scale: 1.1,
    outlineWidth: isTabletOrMobile ? '1rem' : '3rem',
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
      onClick={onClick}
    >
      <p className='explore-button-text text-darkspace'>EXPLORE</p>
    </motion.a>
  )
}
