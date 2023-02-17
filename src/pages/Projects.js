import React from "react";
import '../styles/Projects.css'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function Projects() {
  const { mensaje } = useContext(AppContext);
  return (
    <div className="projects">
      <h1>{mensaje} Estas en Projects</h1>
    </div>
  );
}
