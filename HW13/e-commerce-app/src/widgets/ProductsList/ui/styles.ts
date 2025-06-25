import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/context";
import { colors } from "../../../shared/ui/styleColors";

const ProductsListWrapper = styled.div<{ $theme: Theme }>`
  margin-top: 5rem;
  margin-inline: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  background: ${({ $theme }) => ($theme === "light" ? colors.backgroundBodyLight : colors.backgroundBodyDark)};
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
`;

export { ProductsListWrapper };
