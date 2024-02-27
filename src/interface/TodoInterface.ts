export interface IAction {
  type: string;
  data: ITodo;
}

export interface ITodoList {
  todos: ITodo[];
}

export interface ITodo {
  id: string;
  text: string;
}