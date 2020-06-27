import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import Logo from "../../assets/logo.png";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={Logo} alt="website-logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
