import { useFormik } from "formik";
import React from "react";

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <section className="login">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      <p>Or login with</p>
      <button>Google</button>
    </section>
  );
};

export { Login };