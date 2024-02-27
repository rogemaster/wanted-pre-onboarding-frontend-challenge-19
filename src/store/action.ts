import {ITodo} from "../interface/TodoInterface";

export const ADD_TODO = 'ADD_TODO';
export const DELETED_TODO = 'DELETED_TODO';

export const addTodoAction = (data: ITodo) => {
  return {
    type: ADD_TODO,
    data
  }
};

export const deletedTodoAction = (data: ITodo) => {
  return {
    type: DELETED_TODO,
    data
  }
}