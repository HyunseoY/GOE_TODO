import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function List() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const isDone = false;

  return (
    <div>
      <p>{isDone ? 'DONE' : 'WORKING'}</p>
      {todos
        .filter((item) => {
          return isDone === item.isDone;
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.contents}</p>
              <button>삭제</button>
              <button>{isDone ? '취소' : '완료'}</button>
            </div>
          );
        })}
    </div>
  );
}

export default List;
