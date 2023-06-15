import React from 'react';
import Picture from "../../images/photo.jpg";
import CVDownload from "../CV/Cv.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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
            
            <h3>Retrouvez-moi sur</h3> 
                <ul>
                    <li><a href="https://github.com/SandyL02/" target="blank">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/sandy-lenormand-24a867261/" target="blank">Linkedin</a></li>
                </ul>
                <CVDownload />
        </header>
    )
}