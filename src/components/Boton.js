import React from "react";
import '../styles/Boton.css';

export function Boton({text = 'Click'}){
    return(
        <div className="boton">
                {text}
        </div>
    )
}