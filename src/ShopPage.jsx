import { useOutletContext } from 'react-router-dom'
import ItemCard from './ItemCard'

function ShopPage() {
  const { products } = useOutletContext([])
  return (
    <div className="page-body">
      <h1>Shopping Page</h1>
      {products.map((product) => (
        <ItemCard item={product} key={product.id} />
      ))}
    </div>
  )
}

export default ShopPage
