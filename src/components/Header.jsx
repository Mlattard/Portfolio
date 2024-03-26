import React from "react";

function Header() {
  return (
    <div className="gridHeader">
      <header>
        <div>
          <p className="smiley">{`:)`}</p>
          <h1>Hey, je suis</h1>
          <h1 className='name'>Maxime Lattard</h1>
          <h2>Développeur Web et Logiciel</h2>
        </div>
      </header>

      <div className="presentation">
        <p>
          Fort d'une <a className="lien" href="#section-experience">expérience</a> enrichissante dans le domaine et d'une 
          solide <a className="lien" href="#section-formation">formation</a> en programmation, ainsi que d'une volonté 
          d'apprendre constante et de développer mes <a className="lien" href="#section-competences">compétences</a>, 
          je suis motivé pour rejoindre une équipe innovante et participer à la création et au développement de projets.
        </p>
      </div>
    </div>
  );
}

export default Header;
