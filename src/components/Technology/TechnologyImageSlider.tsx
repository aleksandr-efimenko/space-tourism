import { Technology } from '@/data/dataTypes'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export type TechnologyImageSliderProps = {
  images: Technology['images']
  imageType: 'portrait' | 'landscape'
  className?: string
}

export default function TechnologyImageSlider({ images, imageType, className }: TechnologyImageSliderProps) {
  const image = imageType === 'portrait' ? images.portrait : images.landscape
  const objectFit = imageType === 'portrait' ? 'contain' : 'cover'
  return (
    <>
      <motion.div
        key={image}
        initial={{ x: '-5rem', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        <Image alt='space explorer' src={image} fill style={{ objectFit: objectFit, objectPosition: 'center' }} />
      </motion.div>
    </>
  )
}
