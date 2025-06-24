import { createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "../../../pages/ProductsPage";
import { CartPage } from "../../../pages/CartPage";
import { ProfilePage } from "../../../pages/ProfilePage";
import { HomePage } from "../../../pages/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
