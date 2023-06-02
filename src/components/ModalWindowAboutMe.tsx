import Link from 'next/link'
import Image from 'next/image'
import closeIcon from '~/assets/shared/icon-close.svg'
import { AnimatePresence, motion } from 'framer-motion'

export function ModalWindowAboutMe({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
}) {
  const closeModalAboutMe = () => {
    setIsModalOpen(false)
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className='absolute overflow-hidden inset-0 heading5 text-center text-white'>
          <div className='absolute inset-0 z-40 bg-slate-400 opacity-70' onClick={() => closeModalAboutMe()}></div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              transform: 'translate(-50%, -100%)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: 'easeOut',
                duration: 0.3,
              },
              transform: 'translate(-50%, -50%)',
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: 'easeIn',
                duration: 0.3,
              },
              transform: 'translate(-50%, 100%)',
            }}
            className='relative top-1/2 left-1/2  bg-slate-800 w-10/12 md:w-3/5 h-1/4 
      rounded-lg flex justify-center items-center z-50'
          >
            <button
              className='absolute top-4 right-4 md:top-6 md:right-6 hover:brightness-200 duration-200 w-4 h-4 md:w-5 md:h-5'
              onClick={closeModalAboutMe}
            >
              <Image src={closeIcon} alt='close icon' width={20} height={20} />
            </button>
            <div className='px-4 md:px-6'>
              <p>
                Challenge by{' '}
                <Link
                  className='font-bold underline text-blue-500 hover:text-blue-300 duration-500'
                  href='https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3'
                  target='_blank'
                >
                  Frontend Mentor
                </Link>
              </p>
              <p>
                Coded by{' '}
                <Link
                  className='font-bold underline text-blue-500  hover:text-blue-300 duration-500'
                  href='https://www.linkedin.com/in/aleksandr-efimenko/'
                  target='_blank'
                >
                  Alex Efimenko
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
