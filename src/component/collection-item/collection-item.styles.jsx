import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  min-width: 200px;
  min-height: 200px

  &:hover {
    opacity: 0.7;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 90%;
  max-height: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const NameSpan = styled.span`
  /* width: 90%;
  margin-bottom: 15px; */

  @media screen and (max-width: 700px) {
    margin-bottom: 0px;
    text-align: center;
    font-size: 14px;
  }
`;

export const PriceSpan = styled.span`
  @media screen and (max-width: 700px) {
    text-align: center;
    font-size: 14px;
  }
`;
