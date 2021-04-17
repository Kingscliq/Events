/** @format */

import React from "react";
import "./button.css";

const Button = ({ type, style, text, handleClick, ...props }) => {
  return (
    <button type={type} className='btn' style={style} onClick={handleClick}>
      {text}
    </button>
  );
};

export { Button };
