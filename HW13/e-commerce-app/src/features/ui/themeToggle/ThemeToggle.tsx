import { ThemeToggleWrapper } from "./styles";
import type { Theme } from "../../../app/providers/theme";

interface Props {
  theme: Theme;
  themeToggle: () => void;
}

export const ThemeToggle = ({ theme, themeToggle }: Props) => {
  const handleClick = () => {
    themeToggle();
  };

  return <ThemeToggleWrapper onClick={handleClick} $theme={theme}> Change Theme </ThemeToggleWrapper>;
};
