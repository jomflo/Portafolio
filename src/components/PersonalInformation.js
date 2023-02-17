import React from "react";
import foto from "../imagenes/foto.png";
import "../styles/PersonalInformation.css";

export function PersonalInformation() {
  //calculamos la edad
  function calcularEdad(pDay, pMonth, pAnio) {
    //pDay , pMonth y pAnio son dia, mes y anio de nacimiento
    const date = new Date();
    let anio = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let age = anio - pAnio;

    // is el mes que cumplo anio es mayor que el mes actual le restamos un anio a la edad calculada
    if (pMonth > month) {
      age--;
    }
    // si el mes de mi cumpleanios es igual al mes actual y el dia de mi cumpleanios es mayor que el dia actual , entonces le restamos un anio a la edad calculada, porque quiere decir que en este anio aun no he cumplido anio
    else if (pMonth === month && pDay > day) {
      age--;
    }
    return age;
  }

  return (
    <div className="personal-data">
      <div className="personal-information">
        <h1>
          Personal Information
        </h1>
        <hr className="separator" />
        <div className="personal-information-data">
          <p>Name:</p>
          <p>Jose Moises Florez Castro</p>
        </div>
        <div className="personal-information-data">
          <p>birthdate:</p>
          <p>26/12/1995</p>
        </div>
        <div className="personal-information-data">
          <p>Address:</p>
          <p>Chinandega - Nicaragua</p>
        </div>
        <div className="personal-information-data">
          <p>Age: </p>
          <p>{calcularEdad(26, 12, 1995)} Years</p>
        </div>
        <div className="personal-information-data">
          <p>Tel:</p>
          <p>+505 8175-9532</p>
        </div>
        <div className="personal-information-data">
          <p>Email:</p>
          <p>jmflorez1995@gmail.com</p>
        </div>
      </div>
      <div className="personal-photo">
        <img src={foto} alt="" />
      </div>
    </div>
  );
}
