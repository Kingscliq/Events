import React from "react";
import "./button.css";

const Button = ({ type, className, style, text, onClick, ...props }) => {
  return (
    <button type={type} className={className} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
