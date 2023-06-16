import React from "react";
import Collapse from "../Collapse/Collapse.js";
import data from "../../ressources/works.js";

export default function Works() {
//   const [data, setData] = useState();
//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch("../../ressources/works.json");
//       const worksData = await response.json();
//       setData(worksData);
//     };
//     getData();
//   }, []);

console.log(data)
  return (
    <section className="works">
      <div id="works"></div>
      <h2>Mes projets</h2>
      {data.map((item, ind) => {
        return(
        < Collapse key={ind} data={item}/>
     
      )})}
    </section>
  );
    }
