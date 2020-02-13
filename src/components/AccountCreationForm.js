import React from "react";

const AccountCreationForm = props => {
  return (
    <div className="account-form-creation">
      <p className="account-form-creation-title">Créer un compte</p>
      <form>
        <label for="username">
          Pseudo <span>*</span>
        </label>
        <input id="username" type="text" name="username" value=""></input>
        <label for="email">
          Adresse email <span>*</span>
        </label>
        <input id="email" type="email" name="email" value=""></input>
        <div className="password-wrapper">
          <div className="password-field-and-label">
            <label for="password">
              Mot de passe <span>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value=""
            ></input>
          </div>
          <div className="password-field-and-label">
            <label for="password2">
              Confirmer le mot de passe <span>*</span>
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              value=""
            ></input>
          </div>
        </div>
        <div className="cgv-wrapper">
          <input type="checkbox" name="cvg" id="cvg"></input>
          <label for="cvg">
            « J’accepte les <span>Conditions Générales de Vente</span> et{" "}
            <span>les Conditions Générales d’Utilisation</span> »
          </label>
        </div>
        <button className="account-creation-btn" type="submit">
          Créer mon Compte Personnel
        </button>
      </form>
    </div>
  );
};

export default AccountCreationForm;
