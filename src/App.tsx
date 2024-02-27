import React from 'react';
import List from "./components/List";
import AddTodo from "./components/AddTodo";

import styled from "styled-components";

const RootDiv = styled.div`
  background-color: black;
  width: 50%;
  padding: 1rem;
`;

function App() {
  return (
    <RootDiv>
      <AddTodo />
      <List />
    </RootDiv>
  );
}

export default App;
