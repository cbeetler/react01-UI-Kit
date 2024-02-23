import React from "react";
import clsx from "clsx";

export default function Container(props) {
  const { children, className, ...rest } = props;
  const classes = clsx(className, "ui-container");
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}
