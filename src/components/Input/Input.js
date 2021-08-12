import React from "react";

export const Input = ({ value, onChange }) => (
  <input
    type="text"
    id="input"
    className="input-task"
    autocomplete="off"
    value={value}
    onChange={onChange}
  />
);
