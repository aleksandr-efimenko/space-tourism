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
  const initial = imageType === 'portrait' ? { x: '-5rem', opacity: 0 } : { y: '-5rem', opacity: 0 }
  const animate = imageType === 'portrait' ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }
  return (
    <>
      <motion.div key={image} initial={initial} animate={animate} transition={{ duration: 0.5 }} className={className}>
        <Image alt='space explorer' src={image} fill style={{ objectFit: objectFit, objectPosition: 'center' }} />
      </motion.div>
    </>
  )
}
