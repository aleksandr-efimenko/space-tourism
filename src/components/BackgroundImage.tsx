import Image, { StaticImageData } from 'next/image'

type BackgroundImageProps = {
  backgroundImage: string | StaticImageData | undefined
  alt: string
}

export function BackgroundImage({ backgroundImage, alt }: BackgroundImageProps) {
  const defaultBackgroundImage = '/assets/home/background-home-desktop.jpg'
  return (
    <div className='absolute inset-0 -z-10'>
      <Image
        priority
        src={backgroundImage ? backgroundImage : defaultBackgroundImage}
        alt={alt}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        fill
      />
    </div>
  )
}
