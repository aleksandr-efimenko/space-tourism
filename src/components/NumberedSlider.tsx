import { NumberedSliderProps } from '@/utils/SliderProps'
import Link from 'next/link'

export function NumberedSlider({ itemsNumber, currentIndex, setIndex }: NumberedSliderProps) {
  const items = Array.from(Array(itemsNumber).keys())
  return (
    <div className='flex flex-col gap-8'>
      {items.map((index) => (
        <Link
          href='#'
          onClick={() => setIndex(index)}
          key={index}
          className={`heading4 cursor-pointer hover:border-opacity-1 hover:border-white
          flex justify-center items-center w-20 h-20 border border-white border-opacity-25 rounded-full
          ${index === currentIndex ? ' bg-white text-darkspace ' : ''}`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  )
}
