import React, { useState } from "react";
import { actions, useStore } from "../store";
import Colors from "./Colors";

const TodoItem = ({ item, id }) => {
  const [state, dispatch] = useStore();
  const { id: updateId } = state;
  const [color, setColor] = useState(item.color);

  const [text, setText] = useState(item.text);

  const handleUpdate = () => {
    if (updateId || updateId === 0) {
      if (text !== "") {
        dispatch(actions.updateTodo({ text, color }));
        dispatch(actions.setUpdateTodo(null));
      }
    } else {
      dispatch(actions.setUpdateTodo(id));
    }
  };

  return (
    <div
      className={`todo-item ${id === updateId ? "active" : ""}`}
      style={{ backgroundColor: item.color }}
    >
      <div className="todo-item__value">
        <span className="value">{item.text}</span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="todo-input__colors">
          <Colors value={color} setValue={setColor} />
        </div>
      </div>
      <div className="todo-item__actions">
        <div className="todo-item__edit" onClick={() => handleUpdate()}>
          <i className="fa-solid fa-pen-to-square"></i>
          <span style={{ color: item.color }}>Update</span>
        </div>
        <div
          className="todo-item__remove"
          onClick={() => dispatch(actions.deleteTodo(id))}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
