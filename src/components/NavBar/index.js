import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={style.navBar}>
      <button onClick={() => navigate("/calculate")}>
      <i className="fa-solid fa-clock"></i>
       Calculate
      </button>
      <button onClick={() => navigate("/playlist")}>
      <i className="fa-solid fa-music"></i>
      Playlist
      </button>
      <button onClick={() => navigate("/settings")}>
      <i className="fa-solid fa-gears"></i>
        Settings</button>
      <button onClick={() => navigate("/information")}>
      <i className="fa-solid fa-info"></i>
      Info
      </button>
    </nav>
  );
};

export { NavBar };
