import App from "./App";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import ErrorPage from "./ErrorPage";

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
    {
        path: "shop",
        element: <ShopPage />,
      },
  ];
  
  export default routes;
  