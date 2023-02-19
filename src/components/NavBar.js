import React, {useState} from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import {MdOutlineContactMail, MdHome, MdInfo} from 'react-icons/md';
import {AiOutlineFundProjectionScreen,} from 'react-icons/ai';

export function NavBar() {

  const [navBarState, setNavBarState] = useState(false);

  const handleNavBar =(newNavBarState)=>{
    setNavBarState(newNavBarState );
  }
  const handleLink=(e)=>{
    setNavBarState(false);
  }
  
  return (
    <div className="navigation">
      <Menu handleNavBar={handleNavBar} navBarState={navBarState}/>
      <nav className={`navbar ${navBarState ? 'mostrar-navbar' : 'ocultar-navbar'}`}>
        <Link  onClick={handleLink} to="/"><MdHome className="icon"/></Link>
        <Link  onClick={handleLink} to="/Projects"><AiOutlineFundProjectionScreen className="icon"/></Link>
        <Link  onClick={handleLink} to="/About"><MdInfo className="icon"/></Link>
        <Link  onClick={handleLink} to="/Contact"><MdOutlineContactMail className="icon"/></Link>
      </nav>
    </div>
  );
}
