import { Technology } from '@/data/dataTypes'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export type TechnologyImageSliderProps = {
  images: Technology['images']
  imageType: 'portrait' | 'landscape'
  className?: string
}

export type TechnologyImageSliderSettings = {
  image: string
  objectFit: 'contain' | 'cover'
  initial: { x: string; y: string; opacity: number }
  animate: { x: string; y: string; opacity: number }
}

export default function TechnologyImageSlider({ images, imageType, className }: TechnologyImageSliderProps) {
  const [settings, setSettings] = useState<TechnologyImageSliderSettings>({
    image: '',
    objectFit: 'contain',
    initial: { x: '0', y: '-5rem', opacity: 0 },
    animate: { x: '0', y: '0', opacity: 1 },
  })

  useEffect(() => {
    if (imageType === 'landscape') {
      setSettings({
        image: images.landscape,
        objectFit: 'cover',
        initial: { x: '-5rem', y: '0', opacity: 0 },
        animate: { x: '0', y: '0', opacity: 1 },
      })
    } else {
      setSettings({
        image: images.portrait,
        objectFit: 'contain',
        initial: { x: '0', y: '-5rem', opacity: 0 },
        animate: { x: '0', y: '0', opacity: 1 },
      })
    }
  }, [imageType, images])
  return (
    <>
      <motion.div
        key={settings.image}
        initial={settings.initial}
        animate={settings.animate}
        transition={{ duration: 0.5 }}
        className={className}
      >
        <Image
          alt='space explorer'
          src={settings.image}
          fill
          style={{ objectFit: settings.objectFit, objectPosition: 'center' }}
        />
      </motion.div>
    </>
  )
}
