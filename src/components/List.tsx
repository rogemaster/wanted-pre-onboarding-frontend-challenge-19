import {useSelector} from "react-redux";
import {RootState} from "../store/configureStore";
import ListItem from "./ListItem";

import styled from "styled-components";

const ListDiv = styled.div`
  margin: 1.5rem 0;
`;

const List = () => {
  const todo = useSelector((state: RootState) => state.todo);

  return (
    <ListDiv>
      {todo.todos.map((item) => (
        <ListItem key={item.id} todo={item} />
      ))}
    </ListDiv>
  );
}

export default List;