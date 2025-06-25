import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/theme";
import { colors } from "../../../shared/ui/styleColors";

const ProductsListWrapper = styled.div<{ $theme: Theme }>`
  padding-top: 5rem;
  padding-inline: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  background: ${({ $theme }) => ($theme === "light" ? colors.backgroundBodyLight : colors.backgroundBodyDark)};
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
`;

export { ProductsListWrapper };
