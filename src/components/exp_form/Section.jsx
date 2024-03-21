import React, { useState } from "react";

import Contenu from "./Contenu";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

function Section(props) {
  const [contenuVisible, changerVisible] = useState(false);

  function handleClick(){
    changerVisible(!contenuVisible);
  }
  
  return (
    <div>
      <div className="titreSection gridContainer">
        <h1 className="name" id={`section-${props.data.id}`} >
          {props.data.titre} 
          <button className="titleButton" onClick={handleClick} style={{ marginLeft: "-1rem", verticalAlign: "middle" }}>
            {contenuVisible ? 
            <ExpandLessRoundedIcon style={{ color: "var(--couleur-clair)", fontSize: "8rem"}} /> : 
            <ChevronRightRoundedIcon style={{ color: "var(--couleur-clair)", fontSize: "8rem"}}/>}
          </button>
        </h1>
      </div>
      {contenuVisible && (
        props.data.contenus).map((data) => {
          return(
            <Contenu 
              type={data.type}
              intitule={data.intitule}
              location={data.location}
              annee={data.annee}
              resume={data.resume}
            />
          )
        })}
    </div>
  )
}

export default Section;