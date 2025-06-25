import { useState } from "react";
import { CartContentWrapper } from "../CartContent/styles";
import { InfoBlockWrapper, Price, Quantity, Title, UpdateBtn, UpdateQuantityBlock, RemoveBtn } from "./styles";
import { useCart } from "../../../../shared/lib/hooks/useCart";

interface Props {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export const CartItem = ({ id, title, price, quantity }: Props) => {
  const { state, dispatch } = useCart();

  const handleUpdateQuantityClick = (e: any) => {
    const value = e.currentTarget.textContent;
    if (value === "+") {
      dispatch({
        type: "UPDATE_QUANTITY",
        operation: "increase",
        id: id,
      });
    } else if (value === "-") {
      let type: "UPDATE_QUANTITY" | "REMOVE_ITEM" = "UPDATE_QUANTITY";
      if (quantity == 1) type = "REMOVE_ITEM";

      dispatch({
        type: `${type}`,
        operation: "decrease",
        id: id,
      });
    }
  };

  const handleRemoveClick = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  return (
    <CartContentWrapper>
      <InfoBlockWrapper>
        <Title>{title}</Title>
        <Quantity>{quantity} items</Quantity>
        <Price>{(price * quantity).toFixed(2)}$</Price>
      </InfoBlockWrapper>
      <UpdateQuantityBlock>
        <UpdateBtn onClick={handleUpdateQuantityClick}>+</UpdateBtn>
        <UpdateBtn onClick={handleUpdateQuantityClick}>-</UpdateBtn>
        <RemoveBtn onClick={handleRemoveClick}>×</RemoveBtn>
      </UpdateQuantityBlock>
    </CartContentWrapper>
  );
};
