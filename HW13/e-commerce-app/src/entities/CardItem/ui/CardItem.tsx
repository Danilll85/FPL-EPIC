import React from "react";
import { CardImg, CardItemWrapper, InfoBlock, Title, Price, AddButton } from "./styles";
import type { Theme } from "../../../app/providers/theme";
import { useCart } from "../../../shared/lib/hooks/useCart";

interface Props {
  id: string;
  title: string;
  price: number;
  image: string;
  theme: Theme;
  isLogged: boolean;
}

const CardItem = ({ id, title, price, image, theme, isLogged }: Props) => {
  const { state, dispatch } = useCart();

  const addItemToCart = () => {
    if (!isLogged) {
      alert("login firstly");
      return;
    }

    const updatedElem = state.cart.find((elem) => elem.id === id);
    if (updatedElem) {
      dispatch({
        type: "UPDATE_QUANTITY",
        operation: "increase",
        id: +id,
      });
    } else {
      dispatch({
        type: "ADD_ITEM",
        value: {
          id: id,
          title: title,
          price: price,
          quantity: 1,
        },
      });
    }

    alert("successful! item was added to the cart.");
  };

  return (
    <CardItemWrapper>
      <CardImg src={image} alt={title} />
      <InfoBlock>
        <Title>{title}</Title>
        <div className="price-block">
          <Price>{price.toFixed(2)} $</Price>
        </div>
        <AddButton onClick={addItemToCart}>Add to cart</AddButton>
      </InfoBlock>
    </CardItemWrapper>
  );
};

export const CardItemMemo = React.memo(CardItem);
