import React from 'react';
import Picture from "../../images/photo.jpg";
import CVDownload from "../CV/Cv.js";
import Github from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";



export default function Introduction() {
    return (
        <header className="intro">
            <div id="intro"></div>
            <div className="hello">
            <p><strong>Bonjour ! <br/>
            Je suis Sandy Lenormand,<br/>
            développeuse web junior<br/>
            et ancienne libraire !</strong></p>
            <img src={Picture} alt="portrait de Sandy Lenormand" className="photo"/>
            </div>
            <h2>À propos de moi</h2>
            <p>Après un DUT (Bac+2) Information et Communication option Métiers du Livre, puis plusieurs années en tant que libraire, j'ai décidé de me former au métier de développeuse web, chez OpenClassrooms.</p>
            
                <ul className="socials">
                    <li><a href="https://github.com/SandyL02/" target="blank"><img src={Github} alt= "logo de Github" className="github"></img></a></li>
                    <li><a href="https://www.linkedin.com/in/sandy-lenormand-24a867261/" target="blank"><img src={Linkedin} alt= "logo de Linkedin" className="linkedin"></img></a></li>
                </ul>
                <CVDownload />
        </header>
    )
}