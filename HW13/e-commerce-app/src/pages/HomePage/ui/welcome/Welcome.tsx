import type { Theme } from "../../../app/providers/theme";
import { Header } from "./styles";

interface Props {
  theme: Theme;
}

export const Welcome = ({ theme }: Props) => {
  return <Header $theme={theme}>Welcome to E-Commerce!</Header>;
};
