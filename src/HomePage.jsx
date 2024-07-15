import fancyImage from './assets/fancy.jpg'

function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="welcome">Fashion Boutique</h1>
      <img
        src={fancyImage}
        alt="A lady carrying several bags of merchandise"
        height="200px"
        className="welcome-image"
      />
      <h2>Top Quality, Classy Organics</h2>
      <br />
      <h3>
        Finally, a place where you feel comfortable spending your money. Worry
        no longer about that empty feeling in your wallet. Instead, maximize the
        profit of our shareholders and fulfill our wildest dreams.
      </h3>
    </div>
  )
}

export default HomePage
