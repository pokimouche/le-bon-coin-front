import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountCreationForm from "../components/AccountCreationForm";

const AccountCreation = props => {
  return (
    <main className="header-fixed-margin container">
      <div className="account-creation-wrapper">
        <div className="create-account-documentation">
          <p className="account-documentation-title">
            Pourquoi créer un compte ?
          </p>
          <ul className="account-documentation-list">
            <li>
              <div className="image-doc-account">
                <img src="/doc-timer.svg" alt="documentation icon timer"></img>
              </div>

              <div className="account-documentation-item">
                <p className="account-documentation-label">Gagnez du temps</p>
                <p className="account-documentation-description">
                  Publiez vos annonces rapidement, avec vos informations
                  pré-remplies chaque fois que vous souhaitez déposer une
                  nouvelle annonce.
                </p>
              </div>
            </li>
            <li>
              <div className="image-doc-account">
                <img src="/doc-bell.svg" alt="documentation icon bell"></img>
              </div>

              <div className="account-documentation-item">
                <p className="account-documentation-label">
                  Soyez les premiers informés
                </p>
                <p className="account-documentation-description">
                  Créez des alertes Immo ou Emploi et ne manquez jamais
                  l’annonce qui vous intéresse.
                </p>
              </div>
            </li>
            <li>
              <div className="image-doc-account">
                <img src="/doc-eye.svg" alt="documentation icon eye"></img>
              </div>

              <div className="account-documentation-item">
                <p className="account-documentation-label">Visibilité</p>
                <p className="account-documentation-description">
                  Suivez les statistiques de vos annonces (nombre de fois où
                  votre annonce a été vue, nombre de contacts reçus).
                </p>
              </div>
            </li>
          </ul>
        </div>
        <AccountCreationForm></AccountCreationForm>
      </div>
    </main>
  );
};

export default AccountCreation;
