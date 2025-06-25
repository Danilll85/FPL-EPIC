import styled from "@emotion/styled";
import type { Theme } from "../../../../app/providers/theme";
import { colors } from "../../../../shared/ui/styleColors";

const CartContentWrapper = styled.div<{ $theme: Theme }>`
  background: ${({ $theme }) => ($theme === "light" ? colors.backgroundBodyLight : colors.backgroundBodyDark)};
  padding: 4rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ShowPrice = styled.div<{ $theme: Theme }>`
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
  padding-inline: 5rem;
`;

export { CartContentWrapper, ShowPrice };
