import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google'

export const bellefair = Bellefair({
  subsets: ['latin'],
  variable: '--font-bellfair',
  weight: ['400'],
})

export const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400'],
})

export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['400', '700'],
})
