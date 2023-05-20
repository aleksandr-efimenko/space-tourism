import data from '@/data/data.json'
import { WhiteDotsSlider } from '@/components/Sliders/WhiteDotsSlider'
import { useEffect, useState } from 'react'
import PageTitle from '@/components/PageTitle'
import CrewInfo from '@/components/Crew/CrewInfo'
import CrewImageSlider from '@/components/Crew/CrewImageSlider'
import PageContainer from '@/components/PageContainer'

export default function Crew() {
  const { crew } = data
  const [crewMemberIndex, setCrewMemberIndex] = useState(0)

  return (
    <>
      <PageContainer>
        <PageTitle number='02' title='Meet your crew' />
        <div
          className='flex flex-col-reverse justify-end items-center 
            row-start-3 row-end-4
          md:flex-col md:justify-between
          md:row-start-2 md:row-end-3 
          md:gap-10 md:mt-14 md:mb-10
          lg:gap-28 lg:items-start lg:col-start-2 lg:col-end-8'
        >
          <div className='px-6 md:px-0 mt-8 md:mt-0 '>
            <CrewInfo crewMember={crew[crewMemberIndex]} />
          </div>
          <div className=''>
            <WhiteDotsSlider setIndex={setCrewMemberIndex} currentIndex={crewMemberIndex} itemsNumber={crew.length} />
          </div>
        </div>
        <div
          className=' w-full overflow-hidden
          h-56 row-start-2 row-end-3 my-8
          md:h-full md:row-start-3 md:row-end-4 md:my-0
        lg:row-start-1 lg:row-end-4 lg:col-start-8 lg:col-end-12 '
        >
          <CrewImageSlider crewMember={crew[crewMemberIndex]} />
        </div>
      </PageContainer>
    </>
  )
}
