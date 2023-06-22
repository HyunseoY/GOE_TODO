import React from 'react';
import TodoCard from './TodoCard';

function List() {
  return (
    <div>
      <TodoCard isDone={false} />
      <TodoCard isDone={true} />
    </div>
  );
}

export default List;
