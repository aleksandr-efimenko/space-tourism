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
