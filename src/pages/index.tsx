import { ExploreButton } from '@/components/ExploreButton'
import MainPageInfo from '@/components/MainPage/MainPageInfo'
import PageContainer from '@/components/PageContainer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <PageContainer additionalClassNames='px-6'>
        <div
          className='flex flex-col justify-end mx-auto
          md:pt-16 md:w-9/12 md:row-start-1 md:row-end-2
          lg:pt-0 lg:w-full lg:row-start-2 lg:row-end-3
          lg:col-start-2 lg:col-end-8'
        >
          <MainPageInfo />
        </div>
        <motion.div
          className='flex justify-center items-end
          row-start-2 row-end-4 pb-12 
          md:pb-24
          lg:col-start-9 lg:col-end-12'
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <ExploreButton />
        </motion.div>
      </PageContainer>
    </>
  )
}
