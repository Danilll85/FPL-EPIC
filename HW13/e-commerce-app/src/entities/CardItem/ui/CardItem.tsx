import { useEffect, useState } from "react";
import { CardImg, CardItemWrapper, InfoBlock, Title, Price, Quantity, AddButton } from "./styles";
import type { Theme } from "../../../app/providers/theme";
import { useCart } from "../lib/hooks/useCart";

interface Props {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  theme: Theme;
  isLogged: boolean;
}

export const CardItem = ({ id, title, price, quantity, image, theme, isLogged }: Props) => {
  const { state, dispatch } = useCart();
  const [currentQuantity, setCurrentQuantity] = useState(quantity);


  const addItemToCart = () => {
    if (!isLogged) {
      alert("login firstly");
      return;
    }

    dispatch({
      type: "ADD_ITEM",
      value: {
        id: id,
        title: title,
        price: price,
        quantity: quantity,
      },
    });

    setCurrentQuantity((prev) => prev - 1);
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
        <Quantity>{currentQuantity > 0 ? `Availible: ${currentQuantity} items` : "Not availible"}</Quantity>
        <AddButton onClick={addItemToCart} disabled={quantity === 0}>
          {currentQuantity > 0 ? "Add to cart" : "Not availible"}
        </AddButton>
      </InfoBlock>
    </CardItemWrapper>
  );
};
