import React from "react";
import classNames from "classnames";

const Button = ({ children, className, ...rest }) => {
  const finalClassName = classNames(
    "h-10 w-24 text-center bg-blue-500 m-5 rounded ",
    className
  );
  return (
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
};

export default Button;
