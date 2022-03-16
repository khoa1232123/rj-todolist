import React from "react";
import { IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import avatar from "../imgs/avatar.jpg";

const Header = () => {
  return (
    <header className="header">
      <IkoContainer fluid>
        <IkoRow>
          <IkoCol col={6}>
            <div className="header__logo">My Work</div>
          </IkoCol>
          <IkoCol col={6}>
            <div className="header__avatar">
              <img src={avatar} alt="" />
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </header>
  );
};

export default Header;
