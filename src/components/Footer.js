import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { VscGithub, VscMail } from "react-icons/vsc";
import { AiFillLinkedin , AiOutlineWhatsApp} from "react-icons/ai";
import { Boton } from "./Boton";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-link">
        <Boton
          text="LinkedIn"
          link="https://www.linkedin.com/in/moises-f-296848230"
          isBoton={false}
        >
          <AiFillLinkedin className="icon" />
        </Boton>
      </div>

      <div className="footer-link">
        <Boton text="Github" link="https://github.com/jomflo" isBoton={false}>
          <VscGithub className="icon" />
        </Boton>
      </div>
      <div className="footer-link">
        <Boton
          text="Gmail"
          link="mailto:jmflorez1995@gmail.com"
          isBoton={false}
        >
          <VscMail className="icon" />
        </Boton>
      </div>
      <div className="footer-link">
        <Boton
          text="WhatsApp"
          link="https://wa.me/+50581759532?text=Buenos dias estimado, estamos interesado en sus servicios como desarrollador web FrontEnd, sigue Disponible?"
          isBoton={false}
        >
          <AiOutlineWhatsApp className="icon" />
        </Boton>
      </div>
    </div>
  );
}
