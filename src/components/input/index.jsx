import React from "react";
import "./input.css";

const Input = ({
  type,
  placeholder,
  style,
  className,
  icon,
  onChange,
  rightIcon,
  handleClick,
  onFocus,
  inputStyle,
  onBlur,
  name,
  ...props
}) => {
  return (
    <div className="input" style={style}>
      <span className="icon">{icon}</span>
      <input
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        style={inputStyle}
        className={className}
        onChange={onChange}
        name={name}
      ></input>
      <span className="icon" onClick={handleClick}>
        {rightIcon}
      </span>
    </div>
  );
};
export { Input };
