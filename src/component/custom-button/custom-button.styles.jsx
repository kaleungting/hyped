import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  opacity: 0.7;
  position: absolute;
  width: 70%;
  top: 175px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 10px 0 10px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Permanent Marker", cursive;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  /* opacity: 0.7;
  position: absolute;
  top: 175px; */

  @media screen and (max-width: 700px) {
    font-size: 12px;
    min-width: 135px;
    height: 30px;
    line-height: 30px;
  }

  ${getButtonStyles}
`;
