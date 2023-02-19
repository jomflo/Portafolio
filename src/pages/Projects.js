import React from "react";
import "../styles/Projects.css";
import fotoCalculadora from "../imagenes/calculadora.png";
import fotoGestorTareas from "../imagenes/gestor-tareas.png";
import { Project } from "../components/Project";

export function Projects() {
  return (
    <div className="projects">
      <div className="tittle-page">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        {/* proyecto de la calculadora */}
      <Project
      tittle="ReactJS Calculator"
      foto={fotoCalculadora}
      link="https://jomflo.github.io/calculadora-reactjs/"
      textBoton="Demo"
      isBoton={true}
      />
        {/* Proyecto de gestor de tareas */}
        <Project
      tittle="ReactJS Task Manager"
      foto={fotoGestorTareas}
      link="https://jomflo.github.io/gestor-tareas/"
      textBoton="Demo"
      isBoton={true}
      />
       
      </div>
    </div>
  );
}
