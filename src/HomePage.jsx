import fancyImage from './assets/fancy.jpg'

function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="welcome">Simple & Chic</h1>
      <img
        src={fancyImage}
        alt="A lady carrying several bags of merchandise"
        className="welcome-image"
      />

      <h3 className="home-description">
        Finally, a place where you feel comfortable spending your money.
        <br />
        Worry no longer about that empty feeling in your wallet.
        <br />
        Instead, maximize the profit of our shareholders and fulfill our wildest
        dreams.
      </h3>
    </div>
  )
}

export default HomePage
