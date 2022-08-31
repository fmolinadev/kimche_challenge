import React from "react";
import { Link } from "react-router-dom";
import { cleanDecoration } from "../utils/helpers";

const Landing = () => {
  return (
    <div>
      <h1>Landing page</h1>
      <button>
        <Link to="/home" style={cleanDecoration}>
          Comenzar
        </Link>
      </button>
    </div>
  );
};

export default Landing;
