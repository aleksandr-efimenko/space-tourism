import Link from 'next/link'
import Image from 'next/image'
import logo from '~/assets/shared/logo.svg'
import hamburgerIcon from '~/assets/shared/icon-hamburger.svg'
import { useRouter } from 'next/router'
import { bellefair, barlowCondensed, barlow } from '@/styles/fonts'
import { MainMenuDesktop } from '@/components/MainMenu/MainMenuDesktop'
import { useEffect, useState } from 'react'
import { MainMenuMobile } from './MainMenu/MainMenuMobile'

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  // const [backgroundImage, setBackgroundImage] = useState<string>('')
  // useEffect(() => {
  //   /**
  //    *  Get the background image for the current page from the websiteStructure array
  //    *  depending on the device type
  //    */
  //   const backgroundImageItem = websiteStructure.find((item) => item.path === router.pathname)
  //   const backgroundImage = isMobile
  //     ? backgroundImageItem?.backgroundImageMobile
  //     : backgroundImageItem?.backgroundImageDesktop
  //   setBackgroundImage(backgroundImage || '')
  // }, [router.pathname])

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  return (
    <div
      className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} text-white max-height-100vh overflow-auto`}
    >
      <header
        className='absolute w-full flex items-center justify-between p-6 z-40
        md:py-0 md:pr-0 md:pl-10 lg:pl-14 lg:top-10'
      >
        <div
          className='relative rounded-full bg-white block cursor-pointer
            h-10 w-10 md:h-12 md:w-12 '
        >
          <Link href='/'>
            <Image src={logo} alt='logo' fill />
          </Link>
        </div>
        <hr
          className='relative hidden flex-auto z-10 opacity-25 bg-white h-[1px]
           lg:ml-[2%] left-[2.5%] lg:block'
        />
        <MainMenuDesktop currentPathname={router.pathname} />
        <button className='block md:hidden' onClick={() => setMobileMenuVisible(true)}>
          <Image src={hamburgerIcon} alt='hamburger menu icons' />
        </button>
      </header>

      <MainMenuMobile
        mobileMenuVisible={mobileMenuVisible}
        currentPathname={router.pathname}
        closeMobileMenu={() => setMobileMenuVisible(false)}
      />

      <main>{children}</main>
    </div>
  )
}
