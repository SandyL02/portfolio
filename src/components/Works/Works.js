import React from 'react';
import Collapse from '../Collapse/Collapse.js';
import data from "../../ressources/works.json";


export default function Works() {
  return (
    
    <section className="works">
      <div id="works"></div>
      <h2>Mes projets</h2>
      {data.map(item => (
        <Collapse key={item.id} data={item} />
      ))}
    </section>
  );
}
