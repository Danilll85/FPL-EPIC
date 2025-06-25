import { useTheme } from "../../shared/lib/hooks/useTheme";
import { Navbar } from "../../widgets/Navbar";
import { ProfileBlock } from "./ui";

export const ProfilePage = () => {
  const { theme, dispatch } = useTheme();

  return (
    <>
      <Navbar theme={theme} themeToggle={dispatch} />
      <ProfileBlock theme={theme}/>
    </>
  );
};
