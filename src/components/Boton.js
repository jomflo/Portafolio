import React from "react";
import '../styles/Boton.css';

export function Boton({text = 'Click', link="/portafolio", isBoton=true, children}){
    const handleClick =()=>{
        window.location=link;
    }
    return(
        <div className={isBoton ? 'boton' :  'link'} onClick={handleClick}>
                 {children}{text}
        </div>
    )
}