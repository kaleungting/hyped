import styled from "styled-components";

export const SignInContainer = styled.div`
  min-width: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    width: fit-content;
  }
`;
export const Title = styled.h2`
  margin: 10px 0;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
