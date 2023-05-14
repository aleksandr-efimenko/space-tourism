import Image, { StaticImageData } from 'next/image'

type BackgroundImageProps = {
  backgroundImage: string | StaticImageData | undefined
  alt: string
}

export function BackgroundImage({ backgroundImage, alt }: BackgroundImageProps) {
  return (
    <div className='absolute inset-0 -z-10'>
      {backgroundImage && (
        <Image
          priority
          src={backgroundImage}
          alt={alt}
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
