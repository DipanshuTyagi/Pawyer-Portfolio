import React from "react";
import classNames from "classnames";

const Panal = ({ children, className, ...rest }) => {
  const finalClassName = classNames("p-0", className);

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
};

export default Panal;
