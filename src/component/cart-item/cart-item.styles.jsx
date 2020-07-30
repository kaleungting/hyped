import styled, { css } from "styled-components";

const ItemSpan = css`
  font-size: 16px;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  &:hover {
    opacity: 0.8;
    background-color: lightgray;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const NameSpan = styled.span`
  ${ItemSpan}
`;
export const PriceSpan = styled.span`
  ${ItemSpan}
`;

export const ItemImage = styled.img`
  width: 30%;
`;
