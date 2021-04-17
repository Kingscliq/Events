/** @format */

import React from "react";
import "./input.css";
const Input = ({ type, placeholder, style, icon, handleChange, ...props }) => {
  return (
    <div className='input' style={style}>
      <span className='icon'>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        style={style}
        className='textField'
        onChange={handleChange}
      ></input>
    </div>
  );
};
export { Input };
