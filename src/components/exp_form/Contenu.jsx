import React from "react";
import Resume from "./Resume";

function Contenu(props) {
  return (
    <div className="gridContainer">
      <div className="colonneVide"></div>    
      <div className="contenuPoste">
        <div>
          <p className="intitulePoste">{props.intitule}</p>
          <p className="locationPoste">{props.location}</p>
          <p className="anneePoste">{props.annee}</p>  
        </div>
        
        {props.type === "experience" && (<Resume resume={props.resume}/>)}
      </div>
    </div>
  );
}

export default Contenu;
