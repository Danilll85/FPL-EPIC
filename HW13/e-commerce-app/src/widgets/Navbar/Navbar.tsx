import { useEffect } from "react";
import { Authorization } from "../../features/ui/authorization";
import { ThemeToggle } from "../../features/ui/themeToggle";
import { Logo } from "../../shared/ui/logo";
import { Navigation } from "../../shared/ui/navigation";
import { NavbarWrapper, SettingsWrapper } from "./styles";
import type { Theme } from "../../app/providers/context";

interface Props {
  theme: Theme;
  themeToggle: () => void;
}

export const Navbar = ({ theme, themeToggle }: Props) => {
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <NavbarWrapper $theme={theme}>
      <Logo theme={theme} />
      <Navigation theme={theme} />
      <SettingsWrapper>
        <ThemeToggle theme={theme} themeToggle={themeToggle} />
        <Authorization theme={theme} />
      </SettingsWrapper>
    </NavbarWrapper>
  );
};
