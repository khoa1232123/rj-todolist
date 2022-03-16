import React from "react";
import { IkoTitle } from "../ikoComponents";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoForm = () => {
  return (
    <div className="todo-form">
      <IkoTitle center size={24}>
        Todo List
      </IkoTitle>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoForm;
