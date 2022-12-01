import React from "react";
import { LoginForm } from "../../components/LoginForm";
import style from "./Login.module.css";

const Login = () => {
  return (
    <section className={style.login}>
      <h2>Login</h2>
      <LoginForm />
      <p>Or login with</p>
      <button className={style.googleButton}>
        <i className="fa-brands fa-google"></i>
      </button>
    </section>
  );
};

export { Login };
