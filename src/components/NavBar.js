import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { MdOutlineContactMail, MdHome, MdInfo } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export function NavBar() {
  const [navBarState, setNavBarState] = useState(false);
  const [active, setactive] = useState("home");

  const handleNavBar = (newNavBarState) => {
    setNavBarState(newNavBarState);
  };
  const handleLink = (classActive) => {
    setNavBarState(false);
    setactive(classActive);
  };

  return (
    <div className="navigation">
      <Menu handleNavBar={handleNavBar} navBarState={navBarState} />
      <nav
        className={`navbar ${
          navBarState ? "mostrar-navbar" : "ocultar-navbar"
        }`}
      >
        {/* submenu para ir a home */}
        <Link
          className={active === "home" ? "active" : ""}
          onClick={() => {
            handleLink("home");
          }}
          to="/"
        >
          <MdHome className="icon" />
        </Link>
        {/* submenu para ir a Projects */}
        <Link
          className={active === "projects" ? "active" : ""}
          onClick={() => {
            handleLink("projects");
          }}
          to="/Projects"
        >
          <AiOutlineFundProjectionScreen className="icon" />
        </Link>
        {/* submenu para ir a About */}
        <Link
          className={active === "about" ? "active" : ""}
          onClick={() => {
            handleLink("about");
          }}
          to="/About"
        >
          <MdInfo className="icon" />
        </Link>
        {/* submenu para ir a Contact */}
        <Link
          className={active === "contact" ? "active" : ""}
          onClick={() => {
            handleLink("contact");
          }}
          to="/Contact"
        >
          <MdOutlineContactMail className="icon" />
        </Link>
      </nav>
    </div>
  );
}
