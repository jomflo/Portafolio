import React, {useState} from "react";
import "../styles/Menu.css";
import { VscMenu, VscClose } from "react-icons/vsc";

export function Menu({handleNavBar, navBarState}) {
  
  const handleIcons = () => {
    handleNavBar(!navBarState);
  };

 

  return (
    <div className={`menu ocultar-menu ${!navBarState ? 'showBoton': 'closeBoton'}`} >
        {navBarState ? <VscClose className="icons" onClick={handleIcons}/> : <VscMenu className="icons" onClick={handleIcons}/>}
    </div>
  );
}
