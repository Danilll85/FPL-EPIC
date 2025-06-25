import { Authorization } from "../../features/ui/authorization";
import { ThemeToggle } from "../../features/ui/themeToggle";
import { Logo } from "../../shared/ui/logo";
import { Navigation } from "../../shared/ui/navigation";
import { NavbarWrapper, SettingsWrapper } from "./styles";
import type { Theme } from "../../app/providers/theme";
import { useAuth } from "../../shared/lib/hooks/useAuth";

interface Props {
  theme: Theme;
  themeToggle: () => void;
}

export const Navbar = ({ theme, themeToggle }: Props) => {
  const { state, dispatch } = useAuth();

  return (
    <NavbarWrapper $theme={theme}>
      <Logo theme={theme} />
      <Navigation theme={theme} isLogged={state.isAuth}/>
      <SettingsWrapper>
        <ThemeToggle theme={theme} themeToggle={themeToggle} />
        <Authorization theme={theme} isLogged={state.isAuth} toggleLogged={dispatch} />
      </SettingsWrapper>
    </NavbarWrapper>
  );
};