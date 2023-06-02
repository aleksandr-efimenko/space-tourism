import { render, screen } from '@testing-library/react'
import { PageTitle } from './PageTitle'

describe('PageTitle', () => {
  test('renders the number and title', () => {
    render(<PageTitle number='1' title='Test Title' />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})
