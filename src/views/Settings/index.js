import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import style from "./Settings.module.css";

const Settings = () => {
  const [theme, setTheme] = useState("dark");

  const handleChange = (e) => setTheme(e.target.checked ? "light" : "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <section className={style.settings}>
      <h3>How long does it take you to sleep?</h3>
      <p>
        In minutes. This answer will be taken as the basis for your calculations
        in the app.
      </p>
      <input type="number" />
      <h3>Theme</h3>
      <div className={style.themeContainer}>
        <i className="fa-solid fa-moon"></i>
        <div className={style.toggleContainer}>
          <label className={style.toggle}>
            <input type="checkbox" onChange={handleChange} />
            <span className={style.slider} />
          </label>
        </div>
        <i className="fa-solid fa-sun"></i>
      </div>

      <NavBar />
    </section>
  );
};

export { Settings };
