import React from "react";
import Collapse from "../Collapse/Collapse.js";
import data from "../../ressources/works.js";

export default function Works() {
  return (
    <section className="works">
      <div id="works"></div>
      <h2>Mes projets</h2>
      <div className="collapse-wrapper">
        {data.map((item, ind) => {
          return <Collapse key={ind} data={item} />;
        })}
      </div>
    </section>
  );
}
