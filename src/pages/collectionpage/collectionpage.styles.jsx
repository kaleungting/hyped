import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 35px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;
