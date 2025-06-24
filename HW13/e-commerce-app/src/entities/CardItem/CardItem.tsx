import { useEffect } from "react";
import {
  CardImg,
  CardItemWrapper,
  InfoBlock,
  Title,
  Price,
  Quantity,
  AddButton,
  DiscountBadge,
  Rating,
  FavoriteButton,
} from "./styles";

interface Props {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  discount?: number;
  rating?: number;
}

export const CardItem = ({ id, title, price, quantity, image, discount = 0, rating = 0 }: Props) => {
  useEffect(() => {
    console.log(id, title, price, quantity, image);
  });

  const finalPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <CardItemWrapper>
      {discount > 0 && <DiscountBadge>-{discount}%</DiscountBadge>}
      <FavoriteButton>♥</FavoriteButton>

      <CardImg src={image} alt={title} />

      <InfoBlock>
        <Rating value={rating} max={5} />
        <Title>{title}</Title>

        <div className="price-block">
          {discount > 0 && <Price $old>{price.toFixed(2)} ₽</Price>}
          <Price>{finalPrice.toFixed(2)} ₽</Price>
        </div>

        <Quantity>{quantity > 0 ? `В наличии: ${quantity} шт.` : "Нет в наличии"}</Quantity>

        <AddButton disabled={quantity === 0}>{quantity > 0 ? "В корзину" : "Нет в наличии"}</AddButton>
      </InfoBlock>
    </CardItemWrapper>
  );
};
