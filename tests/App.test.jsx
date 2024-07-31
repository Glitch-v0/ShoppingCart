import React from 'react'
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as reactRouter from 'react-router-dom'
import routes from '../src/routes'
import App from '../src/App'
import NavBar from '../src/NavBar'
import HomePage from '../src/HomePage'
import ShopPage from '../src/ShopPage'
import CartPage from '../src/CartPage'
import ErrorPage from '../src/ErrorPage'

const mockProducts = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    }
  ]

const mockCart = [
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    },
    "quantity": 2
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    },
    "quantity": 1
  }
]
  
  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom')
    return {
      ...actual,
      useOutletContext: vi.fn()
    }
  })

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toHaveTextContent('Simple & Chic')
  })

  it('renders the welcome image', () => {
    render(<HomePage />)
    const image = screen.getByRole('img', { name: /A lady carrying several bags of merchandise/i })
    expect(image).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<HomePage />)
    const description = screen.getByRole('heading', { level: 3 })
    expect(description).toHaveTextContent(/Finally, a place where you feel comfortable spending your money/)
  })

})

describe('ShopPage', () => {
  beforeEach(() => {
    // Mock the useOutletContext hook before each test
    vi.mocked(reactRouter.useOutletContext).mockReturnValue({ products: mockProducts, cartItems: [] })
  })

  it('renders the main heading', () => {
    render(<ShopPage />)
    const mainHeading = screen.getByRole('heading', {level: 1})
    expect(mainHeading).toHaveTextContent('Shopping Page')
  })

  it('renders correct number of ItemCards', () => {
    render(<ShopPage />)
    const itemCards = screen.getAllByTestId('item-card')
    expect(itemCards).toHaveLength(mockProducts.length)
  })

  it('renders product titles and prices', async() => {
    render(<ShopPage />)
    mockProducts.forEach(product => {
      expect(screen.getByRole('heading', {level: 3, name: product.title.trim()})).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: `$${product.price.toFixed(2)}` })).toBeInTheDocument()
      })
    })
})

describe('CartPage', () => {
  const mockUpdateCart = vi.fn();
  beforeEach(() => {
    vi.mocked(reactRouter.useOutletContext).mockReturnValue({ cartItems: mockCart,
      totalItemsInCart: 3, updateCart: mockUpdateCart})
    render(
    <reactRouter.BrowserRouter>
      <reactRouter.Routes>
        <reactRouter.Route path="/" element={<App />}>
          <reactRouter.Route index element={< CartPage />} />
        </reactRouter.Route>
      </reactRouter.Routes>
    </reactRouter.BrowserRouter>
    )
  })
  it('render the headers', () => {
    expect(screen.getByRole('heading', {level: 1} )).toBeInTheDocument()
    const h2s = screen.getAllByRole('heading', {level: 2} )
    expect(h2s).toHaveLength(2)
  })
  it('displays cart items', () => {
    const cardh3s = screen.getAllByRole('heading', {level: 3} )
    expect(cardh3s).toHaveLength(mockCart.length*4) //Four h3 headers on each separate item card
  })
  it('remove item button calls updateCart', async () => {
    const buttons = screen.getAllByRole('button', { name: /Remove Item from Cart/i })
    await userEvent.click(buttons[0]) 
    expect(mockUpdateCart).toHaveBeenCalledOnce() //the delete function eventually calls App's state updater 'updateCart'
  })
  it('changing item quantity calls updateCart ', async () => {
    const input = screen.getAllByRole('spinbutton')[0]
    await userEvent.clear(input)
    await userEvent.type(input, '5')
    expect(mockUpdateCart).toHaveBeenCalled() //the changeCart function eventually calls App's state updater 'updateCart'
  })
})

describe('ErrorPage', () => {
  it('renders the error message', () => {
    render(
      <reactRouter.MemoryRouter initialEntries={['/non-existing-route']}>
        <reactRouter.Routes>
          <reactRouter.Route path="*" element={<ErrorPage />} />
        </reactRouter.Routes>
      </reactRouter.MemoryRouter>
    )
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toHaveTextContent("Oops!")
  })
})

const mockContext = {
  totalItemsInCart: 2,
}

const renderWithRouter = (ui, {initialEntries = ['/']} = {}) => {
  return render(
    <reactRouter.MemoryRouter initialEntries={initialEntries}>
      <reactRouter.Routes>
        <reactRouter.Route path="*" element={ui} />
      </reactRouter.Routes>
    </reactRouter.MemoryRouter>
  )
}

describe('NavBar', () => {
  test('renders all links and they are clickable', async () => {
    const { container } = renderWithRouter(<NavBar context={mockContext} />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Cart: 2 items')).toBeInTheDocument()

    await userEvent.click(screen.getByText('Home'))
    expect(container.innerHTML).toMatch(/\//)

    await userEvent.click(screen.getByText('Shop'))
    expect(container.innerHTML).toMatch(/\/shop/)

    await userEvent.click(screen.getByText('Cart: 2 items'))
    expect(container.innerHTML).toMatch(/\/cart/)
  })
})
describe('NavBar navigation permutations', () => {
  const paths = {
    A: '/',
    B: '/shop',
    C: '/cart'
  }

  const testPermutation = async (permutation) => {
    const { container } = renderWithRouter(<NavBar context={mockContext} />, 
      { initialEntries: permutation.map(key => paths[key]) }
    )

    // Check if we're on the last page of the permutation
    expect(container.innerHTML).toMatch(paths[permutation[2]])

    // Click on the link that's not in the permutation
    const missingKey = 'ABC'.split('').find(key => !permutation.includes(key))
    await userEvent.click(screen.getByText(missingKey === 'A' ? 'Home' : missingKey === 'B' ? 'Shop' : 'Cart: 2 items'))

    // Check if we navigated to the correct page
    expect(container.innerHTML).toMatch(paths[missingKey])

    // Test back navigation
    window.history.back()
    expect(container.innerHTML).toMatch(paths[permutation[2]])

    window.history.back()
    expect(container.innerHTML).toMatch(paths[permutation[1]])
  }

  test('ABC permutation (Home -> Shop -> Cart)', () => testPermutation(['A', 'B', 'C']))
  test('ACB permutation (Home -> Cart -> Shop)', () => testPermutation(['A', 'C', 'B']))
  test('BAC permutation (Shop -> Home -> Cart)', () => testPermutation(['B', 'A', 'C']))
  test('BCA permutation (Shop -> Cart -> Home)', () => testPermutation(['B', 'C', 'A']))
  test('CAB permutation (Cart -> Home -> Shop)', () => testPermutation(['C', 'A', 'B']))
  test('CBA permutation (Cart -> Shop -> Home)', () => testPermutation(['C', 'B', 'A']))
})