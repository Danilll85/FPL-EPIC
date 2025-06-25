import styled from "@emotion/styled";

const CartItemWrapper = styled.div`
  outline: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 4px;
`;

const InfoBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UpdateQuantityBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Quantity = styled.span`
  color: #666;
`;

const Price = styled.span`
  font-weight: bold;
  color: #2a5885;
`;

const UpdateBtn = styled.button`
  padding: 4px 8px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #f5f5f5;
  }
`;

const RemoveBtn = styled.button`
  padding: 4px 8px;
  border: none;
  background: #ff6b6b;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background: #ff5252;
  }
`;

export { CartItemWrapper, InfoBlockWrapper, Title, Quantity, Price, UpdateQuantityBlock, UpdateBtn, RemoveBtn };
