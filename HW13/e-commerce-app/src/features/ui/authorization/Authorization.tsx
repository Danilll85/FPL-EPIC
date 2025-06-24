import type { Theme } from "../../../app/providers/context";
import { AuthWrapper } from "./styles";

interface Props {
  theme: Theme;
}

export const Authorization = ({ theme }: Props) => {
  return <AuthWrapper $theme={theme}>AUTH</AuthWrapper>;
};
