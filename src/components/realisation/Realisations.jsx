import React, { useState } from "react";
import Realisation from "./Realisation";

import realisations from "../../realisations";

function Realisations(props){
  const [contenuVisible, changerVisible] = useState(false);

  function handleClick(){
    changerVisible(!contenuVisible);
  }
  return (
    <div>
      <div className="titreSection gridContainer">
        <h1 className="name" id={`section-realisation`}>Réalisations</h1>
      </div>
      {realisations.map((realisation) => {
        return(
          <Realisation 
          annee={realisation.annee}
          titre={realisation.titre} 
          resume={realisation.resume} 
          lien={realisation.lien}
          detail={realisation.detail}
          technos={realisation.technos}
          imgPrincipale={realisation.imgPrincipale}
          galerie={realisation.galerie}
          />
        )
      })}
    </div>
  )
}

export default Realisations;