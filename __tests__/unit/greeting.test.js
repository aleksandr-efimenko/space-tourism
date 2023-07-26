import { describe } from 'node:test'

const greeting = (guest) => 'Hello ' + guest + '!'

describe('greeting()', () => {
  it('greets a guest', () => {
    expect(greeting('friend')).toBe('Hello friend!')
  })
})
