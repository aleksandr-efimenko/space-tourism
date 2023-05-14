type WebsiteStructure = {
  name: string
  path: string
  backgroundImageDesktop: string
  backgroundImageMobile: string
  backgroundImageAlt: string
}

export const websiteStructure: WebsiteStructure[] = [
  {
    name: 'Home',
    path: '/',
    backgroundImageDesktop: '/assets/home/background-home-desktop.jpg',
    backgroundImageMobile: '/assets/home/background-home-tablet.jpg',
    backgroundImageAlt: 'Home Background Image of Space',
  },
  {
    name: 'Destination',
    path: '/destination',
    backgroundImageDesktop: '/assets/destination/background-destination-desktop.jpg',
    backgroundImageMobile: '/assets/destination/background-destination-tablet.jpg',
    backgroundImageAlt: 'Destination Background Image of dark Space',
  },
  {
    name: 'Crew',
    path: '/crew',
    backgroundImageDesktop: '/assets/crew/background-crew-desktop.jpg',
    backgroundImageMobile: '/assets/crew/background-crew-tablet.jpg',
    backgroundImageAlt: 'Crew Background Image of Earth',
  },
  {
    name: 'Technology',
    path: '/technology',
    backgroundImageDesktop: '/assets/technology/background-technology-desktop.jpg',
    backgroundImageMobile: '/assets/technology/background-technology-tablet.jpg',
    backgroundImageAlt: 'Technology Background Image of Space',
  },
]
