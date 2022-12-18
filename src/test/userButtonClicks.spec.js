import React from 'react'
import {
  render,
  cleanup,
  waitForElement
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'

describe('User button journeys', () => {
  afterEach(cleanup)
  describe('User clicks Golfclubs button in navigation bar', () => {
    it('Login module pops up for navigation button', async () => {
      //arrange
      const { getByText, getAllByText, getByPlaceholderText, queryByText } = render(<App />)

      //act
      userEvent.click(getByText('Golfclubs').closest('button'))

      //assert
      expect(getAllByText('Password')).toBeDefined()
    })
  })


  describe('User clicks hello button', () => {
    it('The Greeting is toggled', async () => {
      //arrange
      const { getByText, getByPlaceholderText, queryByText } = render(<App />)

      //act
      await userEvent.click(getByText('Greetings Visitor').closest('button'))

      //assert
      expect(getByText('Hello my friend')).toBeDefined()
    })
  })

})
