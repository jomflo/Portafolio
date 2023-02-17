import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { VscGithub, VscMail } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  return (
    <div className="footer">
      <Link
        className="footer-likedin"
        to="https://www.linkedin.com/in/moises-f-296848230"
      >
        <AiFillLinkedin className="icon" />
        LinkedIn
      </Link>
      <Link className="footer-github" to="https://www.github.com">
        <VscGithub className="icon" />
        GitHub
      </Link>
      <Link className="footer-gmail" to="https://jmflorez1995@gmail.com">
        <VscMail className="icon" />
        Gmail
      </Link>
    </div>
  );
}
