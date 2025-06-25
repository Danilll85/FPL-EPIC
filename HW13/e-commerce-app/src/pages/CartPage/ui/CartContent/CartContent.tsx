import type { Theme } from "../../../../app/providers/theme";
import { useCart } from "../../../../shared/lib/hooks/useCart";
import { CartItem } from "../CartItem";
import { CartContentWrapper } from "./styles";

interface Props {
  theme: Theme;
}

export const CartContent = ({ theme }: Props) => {
  const { state } = useCart();

  if (state.cart.length === 0)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "4rem",
          fontSize: "4rem",
        }}
      >
        Cart is empty
      </div>
    );

  return (
    <CartContentWrapper>
      {state.cart.map((elem) => {
        return <CartItem key={elem.id} id={+elem.id} title={elem.title} price={elem.price} quantity={elem.quantity} />;
      })}
    </CartContentWrapper>
  );
};
