import { useOutletContext } from 'react-router-dom'
import ItemCard from './ItemCard'

function ShopPage() {
  const [products, updateProducts] = useOutletContext([])
  return (
    <div className="page-body">
      <h1>Welcome to the Shop Page!</h1>
      <h2>We only sell premium, luxury items.</h2>
      {products.map((product) => (
        <ItemCard item={product} />
      ))}
    </div>
  )
}

export default ShopPage
