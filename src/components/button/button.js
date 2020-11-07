import React from "react";
import "./button.css";

const Button = (props) => {
  const value = props.children;

  return <button onClick={() => props.func(value)}>{value}</button>;
};


export default Button;
