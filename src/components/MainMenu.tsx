import { convertToDoubleDigit } from '@/utils/CalculationFunctions'
import { websiteStructure } from '@/data/websiteStructure'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function MainMenu() {
  const router = useRouter()
  const underlineStyle = ' border-opacity-100'
  const underlineHoverStyle = '  border-opacity-0 hover:border-opacity-50'
  const underlineIfActive = (path: string) => {
    return router.pathname === path ? underlineStyle : underlineHoverStyle
  }
  return (
    <nav className='pl-[9%] pr-[12%] backdrop-menu h-full'>
      <ul className='flex gap-12 justify-between nav-text h-full items-center'>
        {websiteStructure.map((item, index) => (
          <li
            key={item.name}
            className={` ${underlineIfActive(item.path)} border-b-[0.1875rem] border-white 
              hover:border-b-[0.1875rem] hover:border-white`}
          >
            <Link href={item.path} key={item.name} className='py-[2.375rem] flex gap-3'>
              <span>{convertToDoubleDigit(index)}</span>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
