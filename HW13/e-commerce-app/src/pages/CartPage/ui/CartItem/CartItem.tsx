import { CartContentWrapper } from "../CartContent/styles";
import { InfoBlockWrapper, Price, Quantity, Title, UpdateBtn, UpdateQuantityBlock } from "./styles";

interface Props {
  title: string;
  price: number;
  quantity: number;
}

export const CartItem = ({ title, price, quantity }: Props) => {
  return (
    <CartContentWrapper>
      <InfoBlockWrapper>
        <Title>{title}</Title>
        <Quantity>{quantity} items</Quantity>
        <Price>{price * quantity}$</Price>
      </InfoBlockWrapper>
      <UpdateQuantityBlock>
        <UpdateBtn>+</UpdateBtn>
        <UpdateBtn>-</UpdateBtn>
      </UpdateQuantityBlock>
    </CartContentWrapper>
  );
};
