import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import '../App/style.css'

export const List = ({list, onChangeBox, handleDel}) => (
  <ul className="task-list">
    {list.map((item) => (
      <li
        key={item.id}
        style={{ textDecoration: item.done ? "line-through" : null }}
      >
        <Checkbox
          onClick={() => onChangeBox(item)}
          defaultChecked={item.done}
        />{" "}
        {item.text}
      </li>
    ))}
  </ul>
);
