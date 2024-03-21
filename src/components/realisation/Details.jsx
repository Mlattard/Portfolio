import React from "react";

function Details(props){
    return (
    <div className="detailsProjet">       
      <p>
        Année :
      </p>
      <p>
        {props.details.annee}
      </p>
      <p>
        Résumé :
      </p>
      <p>
        {props.details.detail}
      </p>
      <p>
        Lien :
      </p>
      <p>
        <a className="lien" href={props.details.lien} target="_blank">{props.details.lien}</a>
      </p>
    </div>
  )
}

export default Details;