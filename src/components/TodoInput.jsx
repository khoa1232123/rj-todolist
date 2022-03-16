import React, { useState } from "react";
import { IkoButton, IkoInput } from "../ikoComponents";
import { actions, useStore } from "../store";
import Colors from "./Colors";

const TodoInput = () => {
  const [state, dispatch] = useStore();
  const [color, setColor] = useState("#FF1717");
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text !== "") {
      dispatch(actions.addTodo({ text, color }));
    }
    setText("");
  };
  return (
    <div className="todo-input">
      <div className="todo-input__input">
        <IkoInput value={text} onChange={(e) => setText(e.target.value)} />
        <div className="todo-input__colors">
          <Colors value={color} setValue={setColor} />
        </div>
      </div>
      <IkoButton onClick={() => handleClick()}>Add</IkoButton>
    </div>
  );
};

export default TodoInput;
