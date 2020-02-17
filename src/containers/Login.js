import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = props => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePassword = event => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const sendLoginForm = async event => {
    event.preventDefault();

    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/api/user/log_in",
      {
        email: email,
        password: password
      }
    );

    props.setToken(response.data.token);

    Cookies.set("token", props.token, { expires: 2000 });
    history.push("/offers");
    resetLoginForm();
  };

  const resetLoginForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <main className="header-fixed-margin container">
      <div className="login-page-wrapper">
        <div className="login-form-wrapper">
          <form className="login-form">
            <div className="form-login-title">Connexion</div>
            <label htmlFor="email">Adresse email</label>
            <input
              onChange={handleEmail}
              type="email"
              id="email"
              name="email"
              value={email}
            ></input>
            <label htmlFor="password">Mot de passe</label>
            <input
              onChange={handlePassword}
              type="password"
              id="password"
              name="password"
              value={password}
            ></input>
            <button
              onClick={sendLoginForm}
              className="form-login-btn"
              type="submit"
            >
              Se connecter
            </button>
          </form>
        </div>

        <div className="without-account-wrapper">
          <p className="without-account-title">Vous n'avez pas de compte ?</p>
          <Link className="account-creation-link" to="/account/creation">
            Créer un compte
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
