import React from "react";
import { useNavigate } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();

  return (
    <section>
      <p>You did it!</p>
      <button onClick={() => navigate("/login")}>Continue<i className="fa-solid fa-caret-right"></i></button>
    </section>
  );
};

export { Successful };
