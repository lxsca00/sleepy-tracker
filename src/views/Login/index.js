import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import style from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    return errors;
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate,
    onSubmit: (values) => {
      signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((userCredential) => {
          navigate("/calculate");
        })
        .catch((error) => {
          const errorCode = error.code;
          //const errorMessage = error.message;
          console.log(errorCode);
        });
      formik.resetForm();
    },
  });

  return (
    <section className={style.login}>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
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
      <p>Or login with</p>
      <button className={style.googleButton}>
        <i className="fa-brands fa-google"></i>
      </button>
    </section>
  );
};

export { Login };
