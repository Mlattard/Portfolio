import React from "react"

import Header from "./Header";
import Footer from "./Footer";
import Section from "./exp_form/Section";
import Realisations from "./realisation/Realisations";

import expForm from "../exp_form";

function App(){
  return (
    <div>
      <Header />
      <Realisations />
      {
        expForm.map(data => {
          return <Section data={data}/>
        })
      }
      <Footer />
    </div> 
  )
}

export default App;