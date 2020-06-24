import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./component/shop/shop.component";
import UserAuthPage from "./pages/userauthpage/userauthpage.component";
import { Header } from "./component/header/header.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={UserAuthPage} />
      </Switch>
    </div>
  );
}

export default App;
