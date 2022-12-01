import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";
import style from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <section className={style.register}>
      <RegisterForm />
      <p>Already have an account?</p>
      <button
        className={style.secondaryButton}
        onClick={() => navigate("/login")}
      >
        Log in <i className="fa-solid fa-caret-right" />
      </button>
    </section>
  );
};

export { Register };
