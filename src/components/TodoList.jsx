import React from "react";
import { useStore } from "../store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [state, dispatch] = useStore();
  const { todos } = state;

  return (
    <div className="todo-list">
      {todos.map((item, index) => (
        <TodoItem item={item} id={index} key={index} />
      ))}
    </div>
  );
};

export default TodoList;
