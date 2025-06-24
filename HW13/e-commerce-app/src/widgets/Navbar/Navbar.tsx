import { useEffect } from "react";
import { Authorization } from "../../features/ui/authorization";
import { ThemeToggle } from "../../features/ui/themeToggle";
import { useTheme } from "../../shared/lib/hooks/useTheme";
import { Logo } from "../../shared/ui/logo";
import { Navigation } from "../../shared/ui/navigation";
import { NavbarWrapper, SettingsWrapper } from "./styles";

export const Navbar = () => {
  const { theme, dispatch } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <NavbarWrapper $theme={theme}>
      <Logo theme={theme}/>
      <Navigation theme={theme}/>
      <SettingsWrapper>
        <ThemeToggle theme={theme} themeToggle={dispatch}/>
        <Authorization theme={theme}/>
      </SettingsWrapper>
    </NavbarWrapper>
  );
};