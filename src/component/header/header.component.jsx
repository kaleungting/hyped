import React from "react";
import Logo from "../../assets/logo.png";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
  Image,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Image src={Logo} alt="website-logo" />
    </LogoContainer>
    <OptionsContainer className="options">
      <OptionLinkContainer className="option" to="/shop">
        SHOP
      </OptionLinkContainer>
      <OptionLinkContainer className="option" to="/contact">
        CONTACT
      </OptionLinkContainer>
      {currentUser ? (
        <OptionLinkContainer
          as="div"
          className="option"
          onClick={() => auth.signOut()}
        >
          SIGN OUT
        </OptionLinkContainer>
      ) : (
        <OptionLinkContainer className="option" to="/signin">
          SIGN IN
        </OptionLinkContainer>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
