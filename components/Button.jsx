import React from "react";
import clsx from "clsx";

export default function Button(props) {
  const { children, className, ...rest } = props;
  const classes = clsx(className, "ui-button");
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
