import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 450px;

  @media screen and (max-width: 550px) {
    width: fit-content;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;
