import { useOutletContext } from 'react-router-dom'
import ItemCard from './ItemCard'

function ShopPage() {
  const { products } = useOutletContext([])
  return (
    <div className="shopping-container">
      <h1>Shopping Page</h1>
      <div className="page-body">
        {products.map((product) => (
          <ItemCard item={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default ShopPage
