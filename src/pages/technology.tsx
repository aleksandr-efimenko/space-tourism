import NumberedSlider from '@/components/NumberedSlider'
import data from '@/data/data.json'
import { useState } from 'react'
import Image from 'next/image'

export default function Technology() {
  const { technology } = data
  const [technologyIndex, setTechnologyIndex] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center justify-between p-24'>
        <h1 className='flex gap-6'>
          <span className='heading5 font-bold opacity-25'>03</span>
          <p className='heading5'>SPACE LAUNCH 101</p>
        </h1>
        <div className='flex'>
          <NumberedSlider
            itemsNumber={technology.length}
            currentIndex={technologyIndex}
            setIndex={setTechnologyIndex}
          />
          <div className='ml-20 flex-1'>
            <p className='nav-text text-paleblue'>THE TERMINOLOGY…</p>
            <h2 className='heading2'>{technology[technologyIndex].name}</h2>
            <p className='text-paleblue'>
              {technology[technologyIndex].description}
            </p>
          </div>
          <div className=''>
            <Image
              alt='space explorer'
              src={technology[technologyIndex].images.portrait}
              width={515}
              height={527}
            />
          </div>
        </div>
      </div>
    </>
  )
}
