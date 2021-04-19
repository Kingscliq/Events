/** @format */

import React from "react";
import colors from "../../config/colors";
import "./button.css";

const Button = ({ type, style, text, handleClick, ...props }) => {
  return (
    <button type={type} className='btn' style={style} onClick={handleClick}>
      {text}
    </button>
  );
};

const styles = {};
export { Button };
