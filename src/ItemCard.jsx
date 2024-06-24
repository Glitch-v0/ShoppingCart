function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <img className="item-picture" src={item.image} key={item.id} />
      <h4>{item.description}</h4>
    </div>
  )
}

export default ItemCard
