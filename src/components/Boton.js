import React from "react";
import '../styles/Boton.css';

export function Boton({text = 'Click', link="/", isBoton=true, children}){

    console.log(isBoton)

    const handleClick =()=>{
        window.location=link;
    }
    return(
        <div className={isBoton ? 'boton' :  'link'} onClick={handleClick}>
                 {children}{text}
        </div>
    )
}