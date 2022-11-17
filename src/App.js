import React, { useEffect, useState } from "react";
import { Button, Form, What } from "./algo";

const themes = {
  'dark': {
    backgroundColor: "black",
    color: "gray"
  },
  'light': {
    backgroundColor: "orange",
    color: "white"
  }
}

export const Context = React.createContext()

function App() {

  const [show, setShow] = useState(false)
  const [theme, setTheme] = useState(themes.dark)

  /* React.lazy, componente suspense y entre ello se coloca el componente dinamico, fallback y lo que diga que esta cargando */

  const Message = ({showed}) => {
    useEffect(() => {
      console.log("Muestro");
    }, [showed])
    return(
      <p>Un mensaje</p>
    )
  }

  return (
    <div className="App">
      <h1>Another react project, please stop</h1>
      <button onClick={() => setShow(!show)}>Mostrar</button>
      { show && <Message showed={show}></Message>}
      <Context.Provider value={theme}>
        <Button></Button>
        <button onClick={() => setTheme(themes.light)}>¿Claro?</button>
        <button onClick={() => setTheme(themes.dark)}>¿Oscuro?</button>
      </Context.Provider>
      <Form></Form>
      <What></What>
    </div>
  );
}

export default App;
