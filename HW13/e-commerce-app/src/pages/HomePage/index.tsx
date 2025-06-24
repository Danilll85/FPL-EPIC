import { Navbar } from "../../widgets/Navbar";
import { Welcome } from "../../shared/ui/welcome";
import { useTheme } from "../../shared/lib/hooks/useTheme";

export const HomePage = () => {
  const {theme, dispatch} = useTheme();

  return (
    <>
      <Navbar theme={theme} themeToggle={dispatch}/>
      <Welcome theme={theme}/>
    </>
  );
};
