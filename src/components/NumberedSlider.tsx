import { NumberedSliderProps } from '@/utils/SliderProps'
import Link from 'next/link'

export function NumberedSlider({ itemsNumber, currentIndex, setIndex }: NumberedSliderProps) {
  const items = Array.from(Array(itemsNumber).keys())
  return (
    <div
      className='flex  md:flex-row md:gap-4 
                        lg:flex-col lg:gap-8'
    >
      {items.map((index) => (
        <Link
          href='#'
          onClick={() => setIndex(index)}
          key={index}
          className={`heading4 cursor-pointer hover:border-opacity-1 hover:border-white
          flex justify-center items-center border border-white border-opacity-25 rounded-full
          w-10 h-10
          md:w-[3.75rem] md:h-[3.75rem]
          lg:w-20 lg:h-20
          ${index === currentIndex ? ' bg-white text-darkspace ' : ''}`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  )
}
