import { TextSliderProps } from '@/utils/SliderProps'
import Link from 'next/link'

export function TextSlider({ items, currentIndex, setIndex }: TextSliderProps) {
  return (
    <div className='flex gap-[2.1875rem] text-paleblue uppercase  nav-text'>
      {items.map((item, i) => {
        return (
          <Link
            key={i}
            href='#'
            className={`${
              i === currentIndex
                ? `text-white underline decoration-[0.1875rem] underline-offset-[0.75rem] decoration-white
                `
                : 'hover:underline hover:decoration-[0.1875rem] hover:underline-offset-[0.75rem] hover:decoration-[hsl(0,0%,59%)]'
            }`}
            onClick={() => setIndex(i)}
          >
            {item}
          </Link>
        )
      })}
    </div>
  )
}
