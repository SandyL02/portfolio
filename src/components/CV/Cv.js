import React from 'react';
import CV from "../../images/CV.pdf";

const CVDownload = () => {
  return (
    <div>
      <a className="btn" href={CV} download>Télécharger mon CV</a>
    </div>
  );
}

export default CVDownload;
