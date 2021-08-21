import React, { useState } from "react";
import { Input } from "../input";

const FormInput = ({
  type,
  className,
  icon,
  placeholder,
  rightIcon,
  handleClick,
  onChange,
  name,
  onFocus,
  onBlur,
  inputStyle,
}) => {
  return (
    <Input
      type={type}
      className={className}
      icon={icon}
      onChange={onChange}
      style={inputStyle}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      rightIcon={rightIcon}
      handleClick={handleClick}
      name={name}
    />
  );
};

export default FormInput;
