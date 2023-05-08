import { convertToDoubleDigit } from '@/utils/CalculationFunctions'
import { websiteStructure } from '@/data/websiteStructure'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function MainMenu() {
  const router = useRouter()

  const underlineStyle = 'border-b-[0.1875rem] border-white'
  const underlineHoverStyle = 'hover:border-b-[0.1875rem] hover:border-white hover:border-opacity-50'
  const underlineIfActive = (path: string) => {
    router.pathname === path ? underlineStyle : underlineHoverStyle
  }
  return (
    <nav>
      <ul className='flex pl-[7.6875rem] pr-[10.3125rem] gap-12 justify-between nav-text backdrop  h-full items-center'>
        {websiteStructure.map((item, index) => (
          <li key={item.name} className={` ${underlineIfActive(item.path)}`}>
            <Link href={item.path} key={item.name} className='flex gap-3'>
              <span>{convertToDoubleDigit(index)}</span>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
