import { convertToDoubleDigit } from '@/utils/CalculationFunctions'
import { websiteStructure } from '@/data/websiteStructure'
import Link from 'next/link'

export function MainMenuDesktop({ currentPathname }: { currentPathname: string }) {
  const underlineStyle = ' border-opacity-100'
  const underlineHoverStyle = '  border-opacity-0 hover:border-opacity-50'
  const underlineIfActive = (path: string) => {
    return currentPathname === path ? underlineStyle : underlineHoverStyle
  }
  return (
    <nav className='hidden md:block lg:pl-[9%] lg:pr-[12%] menu-bg-filter px-12'>
      <ul className='flex gap-12 justify-between h-full items-center'>
        {websiteStructure.map((item, index) => (
          <li
            key={item.name}
            className={` ${underlineIfActive(item.path)} border-b-[0.1875rem] border-white 
              hover:border-b-[0.1875rem] hover:border-white`}
          >
            <Link href={item.path} key={item.name} className='py-[2.375rem] flex gap-3 md:subheading2 lg:nav-text'>
              <span className='hidden lg:block font-bold'>{convertToDoubleDigit(index)}</span>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
