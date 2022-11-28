import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", password: "" },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <section className="register">
      <form onSubmit={formik.handleSubmit}>
        <h2>Signup</h2>
        <div className={style.formItem}>
          <label htmlFor="first-name">First name</label>
          <input
            id="first-name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="last-name">Last name</label>
          <input
            id="last-name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit"><i className="fa-solid fa-caret-right"/></button>
      </form>
      <p>Already have an account?</p>
      <button onClick={() => navigate("/login")}>
        Log in <i className="fa-solid fa-caret-right"/>
      </button>
    </section>
  );
};

export { Register };
