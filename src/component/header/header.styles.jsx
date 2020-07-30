import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  .logo-container {
    padding: 15px;
  }
`;

export const OptionsContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLinkContainer = styled(Link)`
  padding: 10px 15px;
  width: max-content;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const Image = styled.img`
  width: 200px;

  @media (max-width: 700px) {
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
  }


  }
`;
