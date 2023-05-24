import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

type BackgroundImageProps = {
  backgroundImages: { desktop: StaticImageData; mobile: StaticImageData }
  alt: string
}

export function BackgroundImage({ backgroundImages, alt }: BackgroundImageProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const [backgroundImage, setBackgroundImages] = useState<StaticImageData | undefined>(undefined)
  useEffect(() => {
    if (isTabletOrMobile) {
      setBackgroundImages(backgroundImages.mobile)
    } else {
      setBackgroundImages(backgroundImages.desktop)
    }
  }, [backgroundImages, isTabletOrMobile])
  return (
    <div className='absolute inset-0 -z-10 '>
      {backgroundImage && (
        <Image
          priority
          placeholder='blur'
          src={backgroundImage}
          alt={alt}
          quality={95}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          fill
        />
      )}
    </div>
  )
}
