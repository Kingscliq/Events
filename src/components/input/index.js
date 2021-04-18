/** @format */

import React from "react";
import colors from "../../config/colors";
import { FaUserAlt } from "react-icons/fa";
const Input = ({ type, placeholder, style, icon, handleChange }) => {
  return (
    <div className='input' style={styles.input}>
      <span style={styles.icon}>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        style={styles.textField}
        className='textField'
        onChange={handleChange}
      ></input>
    </div>
  );
};
const styles = {
  input: {
    border: "1px solid #161616",
    width: "100%",
    padding: "20px",
    borderRadius: "35px",
    backgroundColor: colors.light,
    margin: "20px 0",
  },
  textField: {
    border: "none",
    outline: "none",
    fontSize: "20px",
    backgroundColor: "transparent",
  },
  icon: {
    fontSize: "20px",
    marginRight: "20px",
    color: colors.darkGrey,
  },
};
export { Input };
