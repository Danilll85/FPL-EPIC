import { useEffect, useState } from "react";
import type { Theme } from "../../../../app/providers/theme";
import { useCart } from "../../../../shared/lib/hooks/useCart";
import { CartItem } from "../CartItem";
import { CartContentWrapper, ShowPrice } from "./styles";
import { colors } from "../../../../shared/ui/styleColors";

interface Props {
  theme: Theme;
}

export const CartContent = ({ theme }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { state } = useCart();

  useEffect(() => {
    const newTotalPrice = state.cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [state.cart]);

  if (state.cart.length === 0)
    return (
      <div
        style={{
          height: '90vh',
          background: theme === "light" ? colors.backgroundBodyLight : colors.backgroundBodyDark,
          color: theme === "light" ? "black" : "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          paddingTop: "6rem",
          fontSize: "4rem",
        }}
      >
        Cart is empty
      </div>
    );

  return (
    <CartContentWrapper $theme={theme}>
      {state.cart.map((elem) => {
        return <CartItem key={elem.id} id={+elem.id} title={elem.title} price={elem.price} quantity={elem.quantity} theme={theme}/>;
      })}

      <ShowPrice $theme={theme}>Total price: {totalPrice.toFixed(2)}</ShowPrice>
    </CartContentWrapper>
  );
};
