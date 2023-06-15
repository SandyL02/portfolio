import React, { useState } from "react";
import ArrowUp from "../../images/arrow_up.png";
import ArrowDown from "../../images/arrow_down.png";

export default function Collapse({ data }) {
  //par défaut le composant Collapse est fermé grâce à "false"
  const [isOpen, setIsOpen] = useState(false);

  //servira à inverser la valeur du useState quand appellé au clic sur collapse-title
  const toggle = () => {
    setIsOpen(!isOpen);
  };
console.log(data.background)
  return (
    <>
      <div>
        <div className="collapse-title" onClick={toggle}>
          <h3>{data.title}</h3>
          <img src={data.background} alt="background"></img>
          <img src={isOpen ? ArrowUp : ArrowDown} alt="arrow" className="collapse-arrow"/>
        </div>
        {isOpen && (
          <div className="collapse-text">
            
            <p>Mission : {data.tasks}</p>
            <p>Problématiques rencontrées : {data.issues}</p>
            <p>Technologies utilisées : {data.techs}</p>
            <p>Lien vers{" "}<a href={data.link} target="blank">{data.website}</a>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
