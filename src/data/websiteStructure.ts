type WebsiteStructure = {
  name: string
  path: string
  backgroundImageDesktop: string
  backgroundImageTablet: string
  backgroundImageMobile: string
  backgroundImageAlt: string
}

export const websiteStructure: WebsiteStructure[] = [
  {
    name: 'Home',
    path: '/',
    backgroundImageDesktop: '/assets/home/background-home-desktop.jpg',
    backgroundImageTablet: '/assets/home/background-home-tablet.jpg',
    backgroundImageMobile: '/assets/home/background-home-mobile.jpg',
    backgroundImageAlt: 'Home Background Image of Space',
  },
  {
    name: 'Destination',
    path: '/destination',
    backgroundImageDesktop: '/assets/destination/background-destination-desktop.jpg',
    backgroundImageTablet: '/assets/destination/background-destination-tablet.jpg',
    backgroundImageMobile: '/assets/destination/background-destination-mobile.jpg',
    backgroundImageAlt: 'Destination Background Image of dark Space',
  },
  {
    name: 'Crew',
    path: '/crew',
    backgroundImageDesktop: '/assets/crew/background-crew-desktop.jpg',
    backgroundImageTablet: '/assets/crew/background-crew-tablet.jpg',
    backgroundImageMobile: '/assets/crew/background-crew-mobile.jpg',
    backgroundImageAlt: 'Crew Background Image of Earth',
  },
  {
    name: 'Technology',
    path: '/technology',
    backgroundImageDesktop: '/assets/technology/background-technology-desktop.jpg',
    backgroundImageTablet: '/assets/technology/background-technology-tablet.jpg',
    backgroundImageMobile: '/assets/technology/background-technology-mobile.jpg',
    backgroundImageAlt: 'Technology Background Image of Space',
  },
]
