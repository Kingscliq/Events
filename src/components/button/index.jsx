import React from "react";
import "./button.css";

const Button = ({ type, className, style, text, onClick, disabled, ...props }) => {
  return (
    <button type={type} className={className} style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export { Button };
