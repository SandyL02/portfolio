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
 
  return (
    <>
      <div className="collapse">
        <div className="collapse-title" onClick={toggle}>
          <h3>{data.title}</h3>
          <img
            src={isOpen ? ArrowUp : ArrowDown}
            alt="arrow"
            className="collapse-arrow"
          />
          <div className="background">
            <img src={data.background} alt="background"></img>
          </div>
        </div>
        {isOpen && (
          <div className="collapse-text">
            <p><span class="color-change">Mission</span> : {data.tasks}</p>
            <p><span class="color-change">Problématiques rencontrées</span> : {data.issues}</p>
            <ul className="techs">
            <span class="color-change">Technologies utilisées</span> :{" "}
              {data.techs.map((tech, index) => (
                <li className="tech" key={index}>
                  {tech}
                </li>
              ))}
            </ul>

            <p>
              Lien vers{" "}
              <span class="color-change"><a href={data.link} target="blank">
                {data.website}
              </a></span>
              .
            </p>
          </div>
        )}
      </div>
    </>
  );
}
