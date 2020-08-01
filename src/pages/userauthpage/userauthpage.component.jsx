import React from "react";
import SignUp from "../../component/sign-up/sign-up.component";
import SignIn from "../../component/sign-in/sign-in.component";
import { UserAuthContainer } from "./user-auth.styles";
const UserAuthPage = () => (
  <UserAuthContainer>
    <SignIn />
    <SignUp />
  </UserAuthContainer>
);

export default UserAuthPage;
