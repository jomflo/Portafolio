import React from "react";
import "../styles/LanguageSkills.css";
import { VscCheck } from "react-icons/vsc";

export function LanguageSkills() {
  return (
    <div className="language-skills">
      <h1>Languages</h1>
      <div className="language-list">
      <div>
        <VscCheck className='language-icons'/>
        <p> JavaScript</p>
      </div>
      <div>
        <VscCheck className='language-icons'/>
        <p>HTML</p>
      </div>
      <div>
        <VscCheck className='language-icons'/>
        <p>CSS</p>
      </div>
      <div>
        <VscCheck className='language-icons'/>
        <p>ReactJs</p>
      </div>
      <div>
        <VscCheck className='language-icons'/>
        <p>PHP</p>
      </div>
      <div>
        <VscCheck className='language-icons'/>
        <p>SQL</p>
      </div>
      <div>
        <VscCheck className='language-icons'/>
        <p>C#</p>
      </div>
      <div>
        <VscCheck className='language-icons'/>
        <p>Visual Basic</p>
      </div>
      <div>
        <VscCheck className='language-icons'/>
        <p>C</p>
      </div>
      </div>
    </div>
  );
}
