import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/modules/todos';

function TodoCard({ isDone }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onClickDeleteBtn = (id) => {
    dispatch(deleteTodo(id));
  };

  const onClickUpdateBtn = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <div>
      <p>{isDone ? 'DONE' : 'WORKING'}</p>
      {todos
        .filter((item) => isDone === item.isDone)
        .map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.contents}</p>
              <button onClick={() => onClickDeleteBtn(item.id)}>삭제</button>
              <button onClick={() => onClickUpdateBtn(item.id)}>
                {isDone ? '취소' : '완료'}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoCard;
