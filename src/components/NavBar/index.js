import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={style.navBar}>
      <button onClick={() => navigate("/calculate")}>
        <i className="fa-solid fa-timer"></i> Calculate
      </button>
      <button onClick={() => navigate("/playlist")}>Playlist</button>
      <button onClick={() => navigate("/settings")}>Settings</button>
      <button onClick={() => navigate("/information")}>Info</button>
    </nav>
  );
};

export { NavBar };
