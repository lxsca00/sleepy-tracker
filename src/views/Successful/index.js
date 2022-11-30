import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Successful.module.css"

const Successful = () => {
  const navigate = useNavigate();

  return (
    <section>
      <p>Account created successfully!</p>
      <button className={style.secondaryButton} onClick={() => navigate("/login")}>Continue<i className="fa-solid fa-caret-right"></i></button>
    </section>
  );
};

export { Successful };
