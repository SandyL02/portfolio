import React from 'react';
import Work from "./Work.js";
import data from "../ressources/works.json";

export default function Works() {
    return (
        <section>
            <h2>Mes projets</h2>
            {data.map(item => ( 
        <Work
          key={item.id}
          item={item}
        />
      ))}
        </section>
    )
}