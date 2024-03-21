import React, { useState } from "react";

import Projet from "./Projet";

function Realisation(props) {
  const [contenuVisible, changerVisible] = useState(false);

  function handleClick(){
    changerVisible(!contenuVisible);
    document.body.classList.toggle('lock-scroll', contenuVisible);
  }

  return (
    <div className="gridContainer">
      <div className="colonneVide"></div> 
      <a className="contenuRealisation" onClick={handleClick}>
        <p className="nomRealisation">{props.annee} | {props.titre}</p>
        <p className="resumeRealisation">{props.resume}</p>
        <div className="listeTechnos">
          {(props.technos).map((techno, index) => (
            <p key={index} className="technos">{techno}</p>
          ))}
        </div>
      </a>
      {contenuVisible && <Projet details={props}/>}
    </div>
  )
}

export default Realisation;