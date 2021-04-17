/** @format */

import React from "react";
import colors from "../../config/colors";
import { FaUserAlt } from "react-icons/fa";
import "./input.css";
const Input = ({ type, placeholder, style, icon, handleChange }) => {
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
