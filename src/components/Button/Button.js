import React from "react";

const Button = ({ title, className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
