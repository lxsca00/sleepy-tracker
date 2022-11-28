import React from "react";
import { NavBar } from "../../components/NavBar";

const Settings = () => {
  return (
    <section>
      <h3>How long does it take you to sleep?</h3>
      <p>
        In minutes. This answer will be taken as the basis for your calculations
        in the app.
      </p>
      <h3>Theme</h3>
      <button>Dark</button>
      <button>Light</button>
      <NavBar/>
    </section>
  );
};

export { Settings };
