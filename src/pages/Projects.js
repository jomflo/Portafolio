import React from "react";
import "../styles/Projects.css";
import fotoCalculadora from "../imagenes/calculadora.png";
import fotoGestorTareas from "../imagenes/gestor-tareas.png";
import { Boton } from "../components/Boton";

export function Projects() {
  return (
    <div className="projects">
      <div className="tittle-page">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        {/* proyecto de la calculadora */}
        <div className="projects-projects projects-calculadora">
          <h3 className="projects-tittle">ReactJS Calculator</h3>
          <hr className="separator"/>
          <div className="projects-content">
            <img className="projects-img" src={fotoCalculadora} alt="" />
            <Boton
              link="https://jomflo.github.io/calculadora-reactjs/"
              text="Ver Demo"
              isBoton={true}
            ></Boton>
          </div>
        </div>
        {/* Proyecto de gestor de tareas */}
        <div className="projects-projects projects-tareas">
          <h3 className="projects-tittle">ReactJS Task Manager</h3>
          <hr className="separator"/>
          <div className="projects-content">
            <img className="projects-img" src={fotoGestorTareas} alt="" />
            <Boton
              link="https://jomflo.github.io/gestor-tareas/"
              text="Ver Demo"
              isBoton={true}
            ></Boton>
          </div>
        </div>
      </div>
    </div>
  );
}
