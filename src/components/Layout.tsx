import Link from 'next/link'
import Image from 'next/image'
import logo from '~/assets/shared/logo.svg'
import { useRouter } from 'next/router'
import { BackgroundImage } from '@/components/BackgroundImage'
import { websiteStructure } from '@/data/websiteStructure'
import { bellefair, barlowCondensed, barlow } from '@/styles/fonts'
import { MainMenu } from '@/components/MainMenu'

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  /**
   *  Get the background image for the current page from the websiteStructure array
   */
  const backgroundImage = websiteStructure.find((item) => item.path === router.pathname)?.backgroundImage

  return (
    <div className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} text-white`}>
      <header className='absolute top-10 pl-14 flex items-center justify-between w-full'>
        <Link href='/' className='rounded-full bg-white h-fit min-w-fit'>
          <Image src={logo} alt='logo' width={50} height={50} />
        </Link>
        <hr className='relative left-[2.3%] z-10 opacity-25 bg-white h-[1px] w-full' />
        <MainMenu />
      </header>
      <main className=''>{children}</main>
      <BackgroundImage backgroundImage={backgroundImage} alt='background image' />
    </div>
  )
}
