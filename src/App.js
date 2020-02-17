import React, { useState } from "react";
import Cookies from "js-cookie";
import "./css/reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Offer from "./containers/Offer";
import Offers from "./containers/Offers";
import Login from "./containers/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faSearch,
  faPlusSquare,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import AccountCreation from "./containers/AccountCreation";
import Footer from "./components/Footer";
library.add(faUser, faSearch, faPlusSquare, faPlus);

function App() {
  let myToken;
  // Test l'existance du cookie
  console.log(Cookies.get("bibi"));
  if (Cookies.get("token") !== undefined) {
    myToken = Cookies.get("token");
  } else {
    // Pour gérer le cas où le cookie n'existe pas encore
    myToken = "";
  }

  const [token, setToken] = useState(myToken);
  return (
    <Router>
      <Header token={token} setToken={setToken}></Header>

      <Switch>
        <Route path="/login">
          <Login token={token} setToken={setToken}></Login>
        </Route>
        <Route path="/account/creation">
          <AccountCreation token={token} setToken={setToken}></AccountCreation>
        </Route>
        <Route path="/Offer/:id">
          <Offer></Offer>
        </Route>
        <Route path="/Offers">
          <Offers></Offers>
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
