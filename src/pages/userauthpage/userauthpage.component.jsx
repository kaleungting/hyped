import React from "react";
import SignUp from "../../component/sign-up/sign-up.component";
import SignIn from "../../component/sign-in/sign-in.component";
import "./userauthpage.styles.scss";
const UserAuthPage = () => (
  <div className="user-auth">
    <SignIn />
    <SignUp />
  </div>
);

export default UserAuthPage;
