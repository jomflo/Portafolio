import React from "react";
import "../styles/Services.css";
import { Card } from "./Card";

export function Services() {
  return (
    <div className="services">
      <div className="services-info">
        <h1 className="tittle">My Services</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id quasi
          eligendi, ducimus ad perspiciatis sint nam porro ipsa aliquid possimus
          aspernatur atque necessitatibus a mollitia molestias maxime officia
          nisi.
        </p>
      </div>
      <div className="services-cards">
        <Card tittle='Web Developer Front-End' subtittle='Lorem ipsum dolor, sit amet consectetur adipisicing elit'/>
        <Card tittle='Web Developer Back-End' subtittle='Lorem ipsum dolor, sit amet consectetur adipisicing elit'/>
        <Card tittle='Software Enginer' subtittle='Lorem ipsum dolor, sit amet consectetur adipisicing elit'/>
      </div>
    </div>
  );
}
