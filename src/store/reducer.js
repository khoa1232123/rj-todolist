import { todo } from "./constants";

const initState = {
  todos: [{ text: "Text", color: "#FF1717" }],
  todo: {},
  id: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case todo.SET_TODO_INPUT:
      return {
        ...state,
        todo: payload,
      };
    case todo.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case todo.DELETE_TODO:
      let arr = [...state.todos];
      arr.splice(payload, 1);
      return {
        ...state,
        todos: arr,
      };
    case todo.UPDATE_TODO:
      let arr2 = [...state.todos];
      arr2[state.id] = payload;
      return {
        ...state,
        todos: arr2,
      };

    case todo.SET_UPDATE_TODO:
      return {
        ...state,
        id: payload,
        todo: state.todos[payload],
      };

    default:
      return state;
  }
}

export { initState };
export default reducer;
