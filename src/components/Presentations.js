import "../styles/Presentations.css";
import foto from "../imagenes/foto.png";
import { Boton } from "./Boton";

export function Presentations() {
  return (
    <div className="presentations">
      <div className="presentation-info">
        <p className="name">I'm Moises Florez</p>
        <p className="cargo">
          <span className="especialidad">Front-End</span> Developer
        </p>
        <p className="descripcion">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          asperiores laudantium debitis minus quod fuga aperiam libero
          recusandae, nulla deserunt obcaecati numquam labore et in unde
          repellendus sit quas vero!
        </p>
        <Boton text='Hire Me'/>
      </div>
      <div className="presentations-foto">
        <img src={foto} alt="" />
      </div>
    </div>
  );
}
