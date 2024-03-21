import React from "react";
import Details from "./Details";

function Projet(props){
  console.log(props.details)
  const listeDeChemins = (props.details.galerie).map(nom => `./img/${nom.lien}`);

  return (
    <div className="divProjet">
      <div>
        <img className="imgPrincipaleProjet" src={`./img/${props.details.imgPrincipale}`} alt="image" />
        <div className="resumeProjet">
          <div>
            <h1 className="name">
              {props.details.titre}
            </h1>
            <hr/>
            <Details details={props.details}/>
          </div>
        </div>
        <div className="galerieProjet">
          {listeDeChemins.map((chemin, index) => (
            <div>
              <img key={index} className="imgProjet" src={chemin} alt={`Image ${index}`} />
              <p>{props.details.galerie[index].legende}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projet;