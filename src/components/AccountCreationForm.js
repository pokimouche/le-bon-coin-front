import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AccountCreationForm = props => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleEmail = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleUserName = event => {
    const newUserName = event.target.value;
    setUserName(newUserName);
  };

  const handlePassword = event => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handlePassword2 = event => {
    const newPassword2 = event.target.value;
    setPassword2(newPassword2);
  };

  const sendAccountForm = async event => {
    event.preventDefault();

    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/api/user/sign_up",
      {
        email: email,
        username: userName,
        password: password
      }
    );
    //setCokinou(response.data);
    props.setToken(response.data.token);
    Cookies.set("token", props.token, { expires: 2000 });
    console.log(response.data);
  };

  return (
    <div className="account-form-creation">
      <p className="account-form-creation-title">Créer un compte</p>
      <form>
        <label htmlFor="username">
          Pseudo <span>*</span>
        </label>
        <input
          onChange={handleUserName}
          id="username"
          type="text"
          name="username"
          value={userName}
        ></input>
        <label htmlFor="email">
          Adresse email <span>*</span>
        </label>
        <input
          onChange={handleEmail}
          id="email"
          type="email"
          name="email"
          value={email}
        ></input>
        <div className="password-wrapper">
          <div className="password-field-and-label">
            <label htmlFor="password">
              Mot de passe <span>*</span>
            </label>
            <input
              onChange={handlePassword}
              type="password"
              id="password"
              name="password"
              value={password}
            ></input>
          </div>
          <div className="password-field-and-label">
            <label htmlFor="password2">
              Confirmer le mot de passe <span>*</span>
            </label>
            <input
              onChange={handlePassword2}
              type="password"
              id="password2"
              name="password2"
              value={password2}
            ></input>
          </div>
        </div>
        <div className="cgv-wrapper">
          <input type="checkbox" name="cvg" id="cvg"></input>
          <label htmlFor="cvg">
            « J’accepte les <span>Conditions Générales de Vente</span> et{" "}
            <span>les Conditions Générales d’Utilisation</span> »
          </label>
        </div>
        <button
          onClick={sendAccountForm}
          className="account-creation-btn"
          type="submit"
        >
          Créer mon Compte Personnel
        </button>
      </form>
    </div>
  );
};

export default AccountCreationForm;
