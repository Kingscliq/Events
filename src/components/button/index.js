/** @format */

import React from "react";
import colors from "../../config/colors";

const Button = ({ type, style, text, handleClick, ...props }) => {
  return (
    <button type={type} style={styles.btn} onClick={handleClick}>
      {text}
    </button>
  );
};

const styles = {
  btn: {
    backgroundColor: colors.primary,
    width: "100%",
    border: "none",
    outline: "none",
    borderRadius: "35px",
    padding: "20px",
    fontSize: "20px",
    color: colors.light,
    margin: "20px auto",
  },
};
export { Button };
