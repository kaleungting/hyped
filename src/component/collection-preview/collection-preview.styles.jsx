import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const TitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
`;
export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
  @media screen and (max-width: 450) {
    grid-template-columns: 1fr;
  }
`;
