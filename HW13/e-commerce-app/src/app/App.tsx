import { RouterProvider } from "react-router-dom";
import { routes } from "./providers/router/index";
import { ThemeProvider } from "./providers/theme/ThemeContext";
import { CartContext } from "./providers/cart/CartContext";
import { AuthProvider } from "./providers/auth/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <CartContext>
        <AuthProvider>
          <RouterProvider router={routes}></RouterProvider>
        </AuthProvider>
      </CartContext>
    </ThemeProvider>
  );
}

export default App;
