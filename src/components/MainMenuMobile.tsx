import closeIcon from '~/assets/shared/icon-close.svg'
import Image from 'next/image'
import { websiteStructure } from '@/data/websiteStructure'
import Link from 'next/link'
import { convertToDoubleDigit } from '@/utils/CalculationFunctions'

export function MainMenuMobile({
  currentPathname,
  closeMobileMenu,
}: {
  currentPathname: string
  closeMobileMenu: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <div className='absolute z-10 md:hidden inset-0 flex justify-end'>
      <div className='w-4/6 h-screen menu-bg-filter'>
        <button className='absolute top-9 right-6' onClick={closeMobileMenu}>
          <Image src={closeIcon} alt='close icon' width={20} height={20} />
        </button>
        <ul className='mt-28 w-full flex flex-col gap-8'>
          {websiteStructure.map((item, index) => (
            <li key={item.name}>
              <Link href={item.path} key={item.name} className='flex ml-8 gap-3 nav-text'>
                <span className='font-bold'>{convertToDoubleDigit(index)}</span>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
