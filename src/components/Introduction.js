import React from 'react';
import Picture from "../images/photo.jpg"

export default function Introduction() {
    return (
        <header>
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
                    <li>Github</li>
                    <li>Linkedin</li>
                </ul>
        </header>
    )
}