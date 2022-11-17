import React, { Component, useContext, useState } from "react";
import { Context } from "./App";

export const Button = () => {
  const cont = useContext(Context);

  return <button style={cont}>Click</button>;
};

const MainInfo = () => {
  const ctx = useContext(FormContext);

  return (
    <>
      <input
        type="email"
        value={ctx.email}
        onChange={(e) => ctx.setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        value={ctx.password}
        onChange={(e) => ctx.setPassword(e.target.value)}
      ></input>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <label>
        <input type="checkbox" name="likes[]" />
        Javascript
      </label>
      <label>
        <input type="checkbox" name="likes[]" />
        PHP
      </label>
    </>
  );
};

console.log(this);

class What extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <>
        <p>Componente de clase, entendí: {this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>Another button</button>
      </>
    );
  }
}

export const FormContext = React.createContext();

export const Form = () => {
  const [email, setEmail] = useState("email@correo.com");
  const [password, setPassword] = useState("");
  const [likes, setLikes] = useState("");

  return (
    <form>
      <FormContext.Provider
        value={{ email, password, likes, setEmail, setPassword, setLikes }}
      >
        <MainInfo></MainInfo>
        <Skills></Skills>
      </FormContext.Provider>

      <div>
        <p>Email: {email}</p>
        <p>Constraseña: {password}</p>
        <p>Lenguajes: </p>
      </div>
    </form>
  );
};

export { What };
