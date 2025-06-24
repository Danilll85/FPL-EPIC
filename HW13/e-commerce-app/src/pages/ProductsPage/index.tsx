import { useTheme } from "../../shared/lib/hooks/useTheme";
import { Navbar } from "../../widgets/Navbar";
import { ProductsList } from "../../widgets/ProductsList/ui/index";

export const ProductsPage = () => {
  const { theme, dispatch } = useTheme();

  return (
    <>
      <Navbar theme={theme} themeToggle={dispatch} />
      <ProductsList theme={theme} />
    </>
  );
};
