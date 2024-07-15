import fancyImage from './assets/fancy.jpg'

function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="welcome">Fashion Boutique</h1>
      <img
        src={fancyImage}
        alt="Hm!"
        height="200px"
        className="welcome-image"
      />
      <h2>Top quality</h2>
      <h2>Classy Organics</h2>
    </div>
  )
}

export default HomePage
