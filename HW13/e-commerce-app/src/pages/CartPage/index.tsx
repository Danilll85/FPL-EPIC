import { useTheme } from "../../shared/lib/hooks/useTheme";
import { Navbar } from "../../widgets/Navbar";

export const CartPage = () => {
  const { theme, dispatch } = useTheme();

  return (
    <>
      <Navbar theme={theme} themeToggle={dispatch} />
    </>
  );
};
