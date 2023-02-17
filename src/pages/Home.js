import React from "react";
import '../styles/Home.css'
// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";
import { Presentations } from "../components/Presentations";
import { Services } from "../components/Services";

export function Home() {
  // const { mensaje } = useContext(AppContext);
  return (
    <div className="home">
      <Presentations/>
      <Services/>
    </div>
  );
}
