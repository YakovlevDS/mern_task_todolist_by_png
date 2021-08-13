import React from "react";
import "../App/style.css"
export const Button = ({ onClick, children }) => (
  <button className="btn" type="button" onClick={onClick}>
    {children}
  </button>
);
