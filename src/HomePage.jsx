import fancyImage from './assets/fancy.jpg'

function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="welcome">Fashion Boutique</h1>
      <h2>"Indulge in life."</h2>
      <img
        src={fancyImage}
        alt="Hm!"
        height="200px"
        className="welcome-image"
      />
    </div>
  )
}

export default HomePage
