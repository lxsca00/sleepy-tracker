import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { LoginForm } from "../../components/LoginForm";
import { addGoogleUser, auth, googleProvider } from "../../firebase/firebase";
import style from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const current = useContext(UserContext);

  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        current.setUser(user);
        addGoogleUser(user);
        navigate("/calculate");
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className={style.login}>
      <h2>Login</h2>
      <LoginForm />
      <p>Or login with</p>
      <button className={style.googleButton} onClick={() => signInGoogle()}>
        <i className="fa-brands fa-google"></i>
      </button>
    </section>
  );
};

export { Login };
