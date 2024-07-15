import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './HomePage'
import ShopPage from './ShopPage'
import CartPage from './CartPage'

describe('App Component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Home Page', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<HomePage />)
    expect(asFragment()).toMatchSnapshot()
  })
})
// Fix the useOutletContext error
// describe('Shop Page', () => {
//   it('matches the snapshot', () => {
//     const { asFragment } = render(<ShopPage />)
//     expect(asFragment()).toMatchSnapshot()
//   })
// })
