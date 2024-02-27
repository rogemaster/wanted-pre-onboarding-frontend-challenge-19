import {ITodo} from "../interface/TodoInterface";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {deletedTodoAction} from "../store/action";

import styled from "styled-components";

interface ITodoItem {
  todo: ITodo;
}

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Span = styled.span`
  width: 36.3rem;
  height: 2.5rem;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  background-color: black;
  color: #ddd;
  padding: 1rem;
`;

const Button = styled.button`
  width: 6rem;
  height: 3rem;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  background-color: black;
  color: #ddd;
`;

const ListItem = ({todo}: ITodoItem) => {
  const dispatch = useDispatch();

  const onClickTodoDelete = useCallback(() => {
    dispatch(deletedTodoAction(todo));
  },[todo.id]);

  return (
    <ItemDiv>
      <Span>{todo.text}</Span>
      <Button onClick={onClickTodoDelete}>Delete</Button>
    </ItemDiv>
  )
}

export default ListItem;