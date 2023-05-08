type WebsiteStructure = {
  name: string
  path: string
  backgroundImage: string
  backgroundImageAlt: string
}

export const websiteStructure: WebsiteStructure[] = [
  {
    name: 'Home',
    path: '/',
    backgroundImage: '/assets/home/background-home-desktop.jpg',
    backgroundImageAlt: 'Home Background Image of Space',
  },
  {
    name: 'Destination',
    path: '/destination',
    backgroundImage: '/assets/destination/background-destination-desktop.jpg',
    backgroundImageAlt: 'Destination Background Image of dark Space',
  },
  {
    name: 'Crew',
    path: '/crew',
    backgroundImage: '/assets/crew/background-crew-desktop.jpg',
    backgroundImageAlt: 'Crew Background Image of Earth',
  },
  {
    name: 'Technology',
    path: '/technology',
    backgroundImage: '/assets/technology/background-technology-desktop.jpg',
    backgroundImageAlt: 'Technology Background Image of Space',
  },
]
