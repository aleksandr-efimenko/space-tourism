import Link from 'next/link'
import Image from 'next/image'
import closeIcon from '~/assets/shared/icon-close.svg'

export default function ModalWindowAboutMe({ setIsModalOpen }: { setIsModalOpen: (value: boolean) => void }) {
  const closeModalAboutMe = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='absolute inset-0 heading5 text-center text-white'>
      <div className='absolute inset-0 z-40 bg-slate-500 opacity-80'></div>
      <div className='relative w-full h-full flex justify-center items-center z-50'>
        <div className='relative bg-slate-800 w-10/12 md:w-3/5 h-1/4 rounded-lg flex justify-center items-center'>
          <button className='absolute top-6 right-6 hover:brightness-200 duration-200' onClick={closeModalAboutMe}>
            <Image src={closeIcon} alt='close icon' width={20} height={20} />
          </button>
          <div className=' px-4 md:px-6'>
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
        </div>
      </div>
    </div>
  )
}
