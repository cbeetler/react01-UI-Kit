import React from "react";
import clsx from "clsx";

export default function Input(props) {
  const { children, className, type = "text", ...rest } = props;
  const classes = clsx(className, "ui-textfield");
  return <input type={type} className={classes} {...rest} />;
}
