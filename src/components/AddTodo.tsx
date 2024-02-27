import React, {ChangeEvent, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addTodoAction} from "../store/action";
import {getId} from "../util/Util";

import styled from "styled-components";

const AddDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 38rem;
  height: 2.5rem;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  background-color: black;
  color: #ddd;
`;

const Button = styled.button`
  width: 6rem;
  height: 3rem;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  background-color: black;
  color: #ddd;
`;

const AddTodo = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const onChangeTodoText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;
    setContent(content);
  }, []);

  const onClickAddTodo = useCallback(() => {
    if (content) {
      dispatch(addTodoAction({
        id: getId(),
        text: content
      }));
      setContent('');
    }
  }, [content]);

  return (
    <AddDiv>
      <Input value={content} onChange={onChangeTodoText} placeholder="오늘의 할일을 입력 하세요." />
      <Button onClick={onClickAddTodo}>Add</Button>
    </AddDiv>
  )
}

export default AddTodo;