import { useEffect } from "react";
import { CardImg, CardItemWrapper, InfoBlock, Title, Price, Quantity, AddButton } from "./styles";

interface Props {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  discount?: number;
  rating?: number;
}

export const CardItem = ({ id, title, price, quantity, image }: Props) => {
  useEffect(() => {
    console.log(`quantity is ${quantity}`);
    console.log(`title is ${title}`);
  });

  return (
    <CardItemWrapper>
      <CardImg src={image} alt={title} />

      <InfoBlock>
        <Title>{title}</Title>

        <div className="price-block">
          <Price>{price.toFixed(2)} $</Price>
        </div>

        <Quantity>{quantity > 0 ? `В наличии: ${quantity} шт.` : "Нет в наличии"}</Quantity>

        <AddButton disabled={quantity === 0}>{quantity > 0 ? "В корзину" : "Нет в наличии"}</AddButton>
      </InfoBlock>
    </CardItemWrapper>
  );
};