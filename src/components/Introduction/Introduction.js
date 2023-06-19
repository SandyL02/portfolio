import React from "react";
import Picture from "../../images/photo.jpg";
import CVDownload from "../CV/Cv.js";
import Github from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";

export default function Introduction() {
  return (
    <header className="intro">
      <div id="intro"></div>
      <div className="hello">
        <p>
          <strong>
            Bonjour ! <br />
            Je suis Sandy Lenormand,
            <br />
            développeuse web junior
            <br />
            et ancienne libraire !
          </strong>
        </p>
        <img
          src={Picture}
          alt="portrait de Sandy Lenormand"
          className="photo"
        />
      </div>
      <h2>À propos de moi</h2>
      <div className="about">
        <p>Bienvenue sur mon portfolio !</p>
        <p>
          Après avoir obtenu mon DUT Information et Communication, option
          Métiers du Livre, j'ai enrichi mon parcours en travaillant pendant
          plusieurs années en tant que libraire. Cette expérience m'a permis de
          développer ma passion pour les mots et les histoires, mais j'ai
          finalement décidé de me lancer dans une reconversion professionnelle.
        </p>

        <p>
          Animée par une soif d'apprendre et de me former à de nouvelles
          technologies, j'ai choisi de suivre la formation de développeuse web
          chez OpenClassrooms. Cela m'a ouvert les portes d'un univers
          passionnant où je peux allier ma créativité et mes compétences
          techniques pour donner vie à des projets en ligne captivants.
        </p>
        <p>
          Sur ce site portfolio, vous découvrirez mes réalisations, mes
          compétences et ma progression en tant que développeuse web. Je suis
          fière de présenter les projets sur lesquels j'ai travaillé, allant de
          sites web interactifs à des applications web fonctionnelles. Chaque
          projet est le fruit de mon engagement et de mon désir constant
          d'apprendre et de m'améliorer.
        </p>
        <p>
          Je suis convaincue que le web est un espace infini de possibilités, et
          je suis toujours prête à relever de nouveaux défis. N'hésitez pas à
          explorer mon portfolio pour découvrir mon travail et à me contacter si
          vous souhaitez discuter d'une collaboration ou d'une opportunité
          professionnelle.
        </p>
        <p>
          Je vous remercie de votre visite et j'espère que vous apprécierez mon
          travail !
        </p>
      </div>

      <ul className="socials">
        <li>
          <a href="https://github.com/SandyL02/" target="blank">
            <img src={Github} alt="logo de Github" className="github"></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sandy-lenormand-24a867261/"
            target="blank"
          >
            <img
              src={Linkedin}
              alt="logo de Linkedin"
              className="linkedin"
            ></img>
          </a>
        </li>
      </ul>
      <CVDownload />
    </header>
  );
}
