import data from '@/data/data.json'
import { WhiteDotsSlider } from '@/components/WhiteDotsSlider'
import { useEffect, useState } from 'react'
import PageTitle from '@/components/PageTitle'
import CrewInfo from '@/components/Crew/CrewInfo'
import CrewImageSlider from '@/components/Crew/CrewImageSlider'

export default function Crew() {
  const { crew } = data
  const [crewMemberIndex, setCrewMemberIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCrewMemberIndex((prev) => (prev + 1) % crew.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [crew])
  return (
    <>
      <div
        className='w-full overflow-hidden
      lg:grid lg:page-container lg:justify-center lg:items-end '
      >
        <div
          className='pt-52 pb-24 col-start-2 col-end-8 min-h-screen flex flex-col 
            justify-self-center justify-between items-start'
          key={crewMemberIndex + crew[crewMemberIndex].name}
        >
          <PageTitle number='02' title='Meet your crew' />
          <div>
            <CrewInfo crewMember={crew[crewMemberIndex]} />
          </div>
          <div className=''>
            <WhiteDotsSlider setIndex={setCrewMemberIndex} currentIndex={crewMemberIndex} itemsNumber={crew.length} />
          </div>
        </div>

        <CrewImageSlider crewMember={crew[crewMemberIndex]} />
      </div>
    </>
  )
}
