import { render, screen } from '@testing-library/react'
import { CrewInfo } from './CrewInfo'
import '@testing-library/jest-dom'
import { Crew } from '@/data/dataTypes'

const mockCrewMember: Crew = {
  name: 'Crew Member',
  role: 'Crew Role',
  bio: 'Crew Bio',
  images: {
    png: 'crew.png',
    webp: 'crew.webp',
  },
}

describe('CrewInfo', () => {
  it('renders crew role', () => {
    render(<CrewInfo crewMember={mockCrewMember} />)
    const heading = screen.getByText('Crew Role')
    expect(heading).toBeInTheDocument()
  })

  it('renders crew name', () => {
    render(<CrewInfo crewMember={mockCrewMember} />)
    const heading = screen.getByText('Crew Member')
    expect(heading).toBeInTheDocument()
  })
  it('renders crew name as h3', () => {
    render(<CrewInfo crewMember={mockCrewMember} />)
    const heading = screen.getByRole('heading', { name: 'Crew Member' })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('heading3')
  })
  it('renders crew bio', () => {
    render(<CrewInfo crewMember={mockCrewMember} />)
    const heading = screen.getByText('Crew Bio')
    expect(heading).toBeInTheDocument()
  })
})
