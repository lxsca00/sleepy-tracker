import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import style from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) errors.firstName = "First name is required";
    if (!values.lastName) errors.lastName = "Last name is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    return errors;
  };

  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", password: "" },
    validate,
    onSubmit: (values) => {
      createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((userCredential) => {
          navigate("/successful");
        })
        .catch((error) => {
          const errorCode = error.code;
          //const errorMessage = error.message;
          // ..
          console.log(errorCode);
        });
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
            onBlur={formik.handleBlur}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <p>{formik.errors.firstName}</p>
          ) : null}
        </div>
        <div className={style.formItem}>
          <label htmlFor="last-name">Last name</label>
          <input
            id="last-name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <p>{formik.errors.lastName}</p>
          ) : null}
        </div>
        <div className={style.formItem}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className={style.formItem}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </div>
        <button type="submit">
          <i className="fa-solid fa-caret-right" />
        </button>
      </form>
      <p>Already have an account?</p>
      <button className={style.secondaryButton} onClick={() => navigate("/login")}>
        Log in <i className="fa-solid fa-caret-right" />
      </button>
    </section>
  );
};

export { Register };
