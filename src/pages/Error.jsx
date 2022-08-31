import React from "react";
import { goBack, cleanDecoration } from "../utils/helpers";

const Error = () => {
  return (
    <div>
      <button onClick={(e) => goBack(e)} style={cleanDecoration}>
        Volver
      </button>
    </div>
  );
};

export default Error;
