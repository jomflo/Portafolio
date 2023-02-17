import React from "react";
import "../styles/Contact.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function Contact() {
  const {contact}= useContext(AppContext);
  const {name, setName, email,setEmail,comment, setComment} = contact;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const enviarForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <form className="form-contact" onSubmit={enviarForm}>
        <h1>Contact Me</h1>
        <div className="nombre">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleName}
            required
            minLength={3}
          />
        </div>
        <div className="correo">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email: email@email.com"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>
        <div className="mensaje">
          <label htmlFor="comment">Commet: </label>
          <input
            type="text"
            name="comment"
            placeholder="Your comment"
            value={comment}
            onChange={handleComment}
            required
            minLength={15}
          />
        </div>
        <input className="boton" type="submit" value="Send" />
      </form>
    </div>
  );
}
