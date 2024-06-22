import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <main>
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </main>
    </div>
  );
};

export default App;
