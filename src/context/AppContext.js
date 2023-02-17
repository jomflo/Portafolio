import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const mensaje = "Hola mundo";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const contact = {
    name,
    email,
    comment,
    setName,
    setEmail,
    setComment,
  };

  return (
    <AppContext.Provider
      value={
        {
        mensaje: mensaje,
        contact:contact
       }
    }
    >
      {props.children}
    </AppContext.Provider>
  );
}
