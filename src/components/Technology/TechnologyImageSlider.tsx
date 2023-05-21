import { Technology } from '@/data/dataTypes'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'

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
  const [isLoading, setLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState<string[]>([])
  const [settings, setSettings] = useState<TechnologyImageSliderSettings>({
    image: '',
    objectFit: 'cover',
    initial: { x: '0', y: '-5rem', opacity: 0 },
    animate: { x: '0', y: '0', opacity: 1 },
  })

  useEffect(() => {
    if (loadedImages.includes(settings.image)) return
    setLoading(true)
  }, [settings.image, loadedImages])

  const handleImageLoad = (src: string) => {
    setLoading(false)
    setLoadedImages((prev) => [...prev, src])
  }

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
        {settings.image && (
          <Image
            priority
            alt='space explorer'
            src={settings.image}
            fill
            style={{ objectFit: settings.objectFit, objectPosition: 'center' }}
            className={`
            duration-500 ease-in-out group-hover:opacity-75
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'})`}
            onLoadingComplete={() => handleImageLoad(settings.image)}
          />
        )}
      </motion.div>
    </>
  )
}
