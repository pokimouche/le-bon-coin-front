import React, { useState } from "react";
import "./css/reset.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import Header from "./components/Header";
import Offer from "./containers/Offer";
import Offers from "./containers/Offers";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faSearch,
  faPlusSquare,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import AccountCreation from "./containers/AccountCreation";
library.add(faUser, faSearch, faPlusSquare, faPlus);

function App() {
  const [page, setPage] = useState("");
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/account/creation">
          <AccountCreation></AccountCreation>
        </Route>
        <Route path="/Offer/:id">
          <Offer></Offer>
        </Route>
        <Route path="/Offers">
          <Offers></Offers>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
