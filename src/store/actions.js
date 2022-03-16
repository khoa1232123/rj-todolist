import { todo } from "./constants";

export const setTodoInput = (payload) => ({
  type: todo.SET_TODO_INPUT,
  payload,
});

export const addTodo = (payload) => ({
  type: todo.ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: todo.DELETE_TODO,
  payload,
});

export const setUpdateTodo = (payload) => ({
  type: todo.SET_UPDATE_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: todo.UPDATE_TODO,
  payload,
});
