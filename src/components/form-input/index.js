import React, { useState } from "react";
import { Input } from "../input";

const FormInput = ({
  type,
  className,
  icon,
  placeholder,
  rightIcon,
  handleClick,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <Input
      type={type}
      className={className}
      icon={icon}
      style={{
        transition: "box-shadow .3s ease-in-out",
        boxShadow: focus ? "0 1px 6px rgb(32 33 36 / 28%)" : "none",
        borderColor: focus ? "rgba(223,225,229,0)" : "#dfe1e5",
      }}
      placeholder={placeholder}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      rightIcon={rightIcon}
      handleClick={handleClick}
    />
  );
};

export default FormInput;
