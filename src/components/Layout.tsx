import Link from 'next/link'
import Image from 'next/image'
import logo from '~/assets/shared/logo.svg'
import { useRouter } from 'next/router'
import { BackgroundImage } from './BackgroundImage'
import { websiteStructure } from '@/data/websiteStructure'
import { convertToDoubleDigit } from '@/utils/CalculationFunctions'
import { bellefair, barlowCondensed, barlow } from '@/styles/fonts'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const underlineStyle = 'border-b-[0.1875rem] border-white'
  const underlineHoverStyle = 'hover:border-b-[0.1875rem] hover:border-white hover:border-opacity-50'
  const underlineIfActive = (path: string) => {
    return router.pathname === path ? underlineStyle : underlineHoverStyle
  }

  /**
   *  Get the background image for the current page from the websiteStructure array
   */
  const backgroundImage = websiteStructure.find((item) => item.path === router.pathname)?.backgroundImage

  return (
    <div className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} text-white`}>
      <nav className='absolute top-10 h-24 flex items-center justify-between w-full'>
        <Link href='/' className='rounded-full bg-white h-fit'>
          <Image src={logo} alt='logo' width={50} height={50} />
        </Link>
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
      <main className='container'>{children}</main>
      <BackgroundImage backgroundImage={backgroundImage} alt='background image' />
    </div>
  )
}
