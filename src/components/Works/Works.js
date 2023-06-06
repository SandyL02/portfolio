import React from 'react';
import Work from "../Work/Work.js";
import data from "../../ressources/works.json";

export default function Works() {
    return (
        <section>
            <h2 id="works">Mes projets</h2>
            {data.map(item => ( 
        <Work
          key={item.id}
          item={item}
        />
      ))}
        </section>
    )
}