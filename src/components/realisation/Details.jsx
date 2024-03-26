import React from "react";

function Details(props){
    return (
    <div className="detailsProjet">
      <div>
        <p>
          Année :
        </p>
        <p>
          {props.details.annee}
        </p>
      </div>     
        
      <div>
        <p>
          Résumé :
        </p>
        <p>
          {props.details.detail}
        </p>
      </div>

      <div>
        <p>
          Lien :
        </p>
        <p>
          <a className="lien" href={props.details.lien} target="_blank">{props.details.lien}</a>
        </p>
      </div>
    </div>
  )
}

export default Details;