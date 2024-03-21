import React, { useState } from "react";
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';

function Resume(props) {
  const [resumeVisible, changerVisible] = useState(false);

  function handleClick(){
    changerVisible(!resumeVisible);
  }

  return (
    <div className={resumeVisible ? "contenuResume visible" : "contenuResume"}>
      <button onClick={handleClick} id="toggleButton">
        {resumeVisible ? 
          <CloseFullscreenRoundedIcon style={{ color: "var(--couleur-clair)"}} /> : 
          <OpenInFullRoundedIcon style={{ color: "var(--couleur-clair)" }} />}
      </button>
      {resumeVisible && (
        <p className="resumeParagraph">
          {props.resume}
        </p>
      )}
    </div>
  );
}

export default Resume;
