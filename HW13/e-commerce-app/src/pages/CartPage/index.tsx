import { useTheme } from "../../shared/lib/hooks/useTheme";
import { Navbar } from "../../widgets/Navbar";
import { CartContent } from "./ui/CartContent";

export const CartPage = () => {
  const { theme, dispatch } = useTheme();

  return (
    <>
      <Navbar theme={theme} themeToggle={dispatch} />
      <CartContent theme={theme}/>
    </>
  );
};
