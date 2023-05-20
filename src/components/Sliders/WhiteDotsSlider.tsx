import { motion } from 'framer-motion'
import { NumberedSliderProps } from '@/utils/SliderProps'

export function WhiteDotsSlider({ itemsNumber, currentIndex, setIndex }: NumberedSliderProps) {
  const items = Array.from(Array(itemsNumber).keys())
  return (
    <div className='flex gap-6 justify-start'>
      {items.map((index) => (
        <motion.div
          whileHover={{ scale: 1.2 }}
          key={index}
          className={`w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full bg-white cursor-pointer 
          ${currentIndex === index ? 'opacity-1' : 'opacity-[0.17]  hover:opacity-50'}`}
          onClick={() => setIndex(index)}
        />
      ))}
    </div>
  )
}
