import React from 'react';
import Picture from "../../images/photo.jpg"

export default function Introduction() {
    return (
        <header id="intro">
            <p>Bonjour ! <br/>
            Je suis Sandy Lenormand,<br/>
            développeuse web junior<br/>
            et ancienne libraire !</p>
            <img src={Picture} alt="portrait de Sandy Lenormand"/>
            <h2>À propos de moi</h2>
            <p>Après plusieurs années en tant que libraire, j'ai décidé de me former au métier de développeuse web, chez OpenClassrooms.</p>
            <p>Mon CV</p>
            <h3>Retrouvez-moi sur</h3> 
                <ul>
                    <li><a href="https://github.com/SandyL02/" target="blank">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/sandy-lenormand-24a867261/" target="blank">Linkedin</a></li>
                </ul>
        </header>
    )
}