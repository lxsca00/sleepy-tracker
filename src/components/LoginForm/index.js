import React, { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import style from "./LoginForm.module.css";
import { UserContext } from "../../App";

const LoginForm = () => {
  const navigate = useNavigate();
  const current = useContext(UserContext);

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
          const user = userCredential.user
          current.setUser(user)
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
          type="password"
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
  );
};

export { LoginForm };
