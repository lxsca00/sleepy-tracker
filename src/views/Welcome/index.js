import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Welcome.module.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className={style.welcome}>
      <div className={style.something}/>
      <h1>Sleepy tracker</h1>
      <p>To sleep well is to look and feel better</p>
      <p>Let's go!</p>
      <button
        className={style.secondaryButton}
        onClick={() => navigate("/register")}
      >
        Get started
        <i className="fa-solid fa-caret-right"></i>
      </button>
    </section>
  );
};

export { Welcome };
