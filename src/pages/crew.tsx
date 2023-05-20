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
          className='flex flex-col justify-between items-center row-start-2 row-end-3 
          md:gap-10 md:mt-14 md:h-fit
          lg:gap-28 lg:items-start lg:col-start-2 lg:col-end-8'
        >
          <div className=''>
            <CrewInfo crewMember={crew[crewMemberIndex]} />
          </div>
          <div className=''>
            <WhiteDotsSlider setIndex={setCrewMemberIndex} currentIndex={crewMemberIndex} itemsNumber={crew.length} />
          </div>
        </div>
        <div
          className='lg:h-full w-full 
          row-start-3 row-end-4 overflow-hidden
        lg:row-start-1 lg:row-end-4 lg:col-start-8 lg:col-end-12 '
        >
          <CrewImageSlider crewMember={crew[crewMemberIndex]} />
        </div>
      </PageContainer>
    </>
  )
}
