import "../styles/Skills.css";
import {
  SiCss3,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiPhp,
  SiMysql,
  SiCsharp,
} from "react-icons/si";

export function Skills() {
  return (
    <div className="skills">
      <div className="skills-lenguage">
      <h1 className="skills-tittle">Skills</h1>
      </div>
      <div className="skills-lenguage">
        <SiJavascript className="icons js" />
        <p>JavaScript</p>
      </div>
      <div className="skills-lenguage">
        <SiHtml5 className="icons html" />
        <p>HTML</p>
      </div>
      <div className="skills-lenguage">
        <SiCss3 className="icons css" />
        <p>CSS</p>
      </div>
      <div className="skills-lenguage">
        <SiReact className="icons react" />
        <p>ReactJS</p>
      </div>
      <div className="skills-lenguage">
        <SiPhp className="icons php" />
        <p>PHP</p>
      </div>
      <div className="skills-lenguage">
        <SiMysql className="icons mysql" />
        <p>MYSQL</p>
      </div>
      <div className="skills-lenguage">
        <SiCsharp className="icons csharp" />
        <p>C#</p>
      </div>
    </div>
  );
}
