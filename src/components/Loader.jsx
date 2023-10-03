import React from "react";
import svg from "../images/icons.svg";

function Loader() {
  return (
    <div className="loader-box">
      <svg className="loader-svg">
        <use href={`${svg}#icon-loader`}></use>
      </svg>
    </div>
  );
}

export default Loader;
