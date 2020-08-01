import styled from "styled-components";

export const UserAuthContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;

  @media screen and (max-width: 800px) {
    width: fit-content;
    flex-direction: column;
  }
`;
