import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemContainer = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageSpan = styled.span`
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin: 40px;
`;

export const TotalContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid gray;
`;
