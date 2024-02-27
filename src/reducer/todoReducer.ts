import {IAction, ITodoList} from "../interface/TodoInterface";
import {ADD_TODO, DELETED_TODO} from "../store/action";

export const initialState: ITodoList = {
  todos: []
}

const todoReducer = (state: ITodoList = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.data]
      };
    case DELETED_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.data.id)
      };
    default:
      return state;
  }
}

export default todoReducer;