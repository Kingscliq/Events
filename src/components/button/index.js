/** @format */

import React from "react";

const Button = ({
  type,
  className,
  style,
  text,
  handleClick,
  icon,
  ...props
}) => {
  return (
    <div>
      <button
        type={type}
        className={className}
        style={style}
        onClick={handleClick}
      >
        {icon} &nbsp;{text}
      </button>
    </div>
  );
};

export { Button };
