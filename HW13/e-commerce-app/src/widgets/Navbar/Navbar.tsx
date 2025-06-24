import { Authorization } from "../../features/ui/authorization";
import { ThemeToggle } from "../../features/ui/themeToggle";
import { Logo } from "../../shared/ui/logo";
import { Navigation } from "../../shared/ui/navigation";
import { NavbarWrapper, SettingsWrapper } from "./styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo />
      <Navigation />
      <SettingsWrapper>
        <ThemeToggle />
        <Authorization />
      </SettingsWrapper>
    </NavbarWrapper>
  );
};
