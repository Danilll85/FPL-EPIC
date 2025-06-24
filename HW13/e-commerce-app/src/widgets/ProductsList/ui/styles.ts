import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/context";
import { colors } from "../../../shared/ui/styleColors";

const ProductsListWrapper = styled.div<{ $theme: Theme }>`
  background: ${({ $theme }) => ($theme === "light" ? colors.backgroundBodyLight : colors.backgroundBodyDark)};
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
`;

export { ProductsListWrapper };
