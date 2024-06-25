import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Oops! You shouldn&apos;t be here.</h1>
      <Link to="/">Click here to return home.</Link>
    </div>
  )
}

export default ErrorPage
