import styled from "@emotion/styled";
import { colors } from "../../shared/ui/styleColors";

const NavbarWrapper = styled.div<{ $theme: string }>`
  outline: 1px solid black;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-around;

  background: ${({ $theme }) => ($theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
`;

const SettingsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export { NavbarWrapper, SettingsWrapper };