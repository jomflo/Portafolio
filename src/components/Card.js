import React from "react";
import "../styles/Card.css";
import { AiOutlineDesktop } from "react-icons/ai";

export function Card({tittle, subtittle}) {
  return (
    <div className="card">
      <AiOutlineDesktop className="card-icons" />
      <p className="tittle">{tittle}</p>
      <p className="sub-tittle">{subtittle}</p>
    </div>
  );
}
