import React from 'react';
import TodoCard from './TodoCard';
import { styled } from 'styled-components';

function List() {
  return (
    <StDiv>
      <TodoCard isDone={false} />
      <TodoCard isDone={true} />
    </StDiv>
  );
}

export default List;

const StDiv = styled.div`
  background: none;
  margin: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 800px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
`;
