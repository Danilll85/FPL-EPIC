import styled from "@emotion/styled";

export const CardItemWrapper = styled.div`
  position: relative;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  background: white;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .price-block {
    display: flex;
    gap: 0.8rem;
    align-items: baseline;
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.4rem;
`;

export const Price = styled.span<{ $old?: boolean }>`
  font-size: ${({ $old }) => ($old ? "0.8rem" : "1.2rem")};
  font-weight: ${({ $old }) => ($old ? "400" : "700")};
  color: ${({ $old }) => ($old ? "#999" : "#333")};
  text-decoration: ${({ $old }) => ($old ? "line-through" : "none")};
`;

export const Quantity = styled.span`
  font-size: 0.85rem;
`;

export const AddButton = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 0.8rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
