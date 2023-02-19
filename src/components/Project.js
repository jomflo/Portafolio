import React from "react";
import '../styles/Project.css';
import { Boton } from "./Boton";
export function Project({tittle, foto, link, textBoton, isBoton}) {
  return (
    <div className="project">
      <h3 className="project-tittle">{tittle}</h3>
      <div className="project-content">
        <img className="project-img" src={foto} alt="" />
        <Boton
          link={link}
          text={textBoton}
          isBoton={isBoton}
        ></Boton>
      </div>
    </div>
  );
}
