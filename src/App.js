import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Calculate } from "./views/Calculate";
import { Info } from "./views/Info";
import { Login } from "./views/Login";
import { Playlist } from "./views/Playlist";
import { Register } from "./views/Register";
import { Settings } from "./views/Settings";
import { Successful } from "./views/Successful";
import { Welcome } from "./views/Welcome";
//import { Button, Form, What } from "./algo";

/*const themes = {
  'dark': {
    backgroundColor: "black",
    color: "gray"
  },
  'light': {
    backgroundColor: "orange",
    color: "white"
  }
}*/

//export const Context = React.createContext()
export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState("");

  //const [show, setShow] = useState(false)
  //const [theme, setTheme] = useState(themes.dark)

  /* React.lazy, componente suspense y entre ello se coloca el componente dinamico, fallback y lo que diga que esta cargando */

  /*const Message = ({showed}) => {
    useEffect(() => {
      console.log("Muestro");
    }, [showed])
    return(
      <p>Un mensaje</p>
    )
  }*/

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        {/*<h1>Another react project, please stop</h1>
      <button onClick={() => setShow(!show)}>Mostrar</button>
      { show && <Message showed={show}></Message>}
      <Context.Provider value={theme}>
        <Button></Button>
        <button onClick={() => setTheme(themes.light)}>¿Claro?</button>
        <button onClick={() => setTheme(themes.dark)}>¿Oscuro?</button>
      </Context.Provider>
      <Form></Form>
      <What></What> */}
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="register" element={<Register />} />
          <Route path="successful" element={<Successful />} />
          <Route path="login" element={<Login />} />
          <Route
            path="information"
            element={
              <ProtectedRoute user={user}>
                <Info />
              </ProtectedRoute>
            }
          />
          <Route
            path="playlist"
            element={
              <ProtectedRoute user={user}>
                <Playlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute user={user}>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="calculate"
            element={
              <ProtectedRoute user={user}>
                <Calculate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
