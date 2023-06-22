import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/modules/todos';

function Form() {
  // 인풋 관련
  const INIT_VALUE = { title: '', contents: '', id: Date.now(), isDone: false };
  const [todo, setTodo] = useState(INIT_VALUE);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  // 투두 추가 관련
  const dispatch = useDispatch();

  const onSubmitAddHandler = (e) => {
    e.preventDefault();
    if (todo.title === '' || todo.contents === '') return;

    dispatch(addTodo({ ...todo }));
    setTodo(INIT_VALUE);
  };

  return (
    <form onSubmit={onSubmitAddHandler}>
      <label>제목</label>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={onChangeHandler}
      />
      <label>내용</label>
      <input
        type="text"
        name="contents"
        value={todo.contents}
        onChange={onChangeHandler}
      />
      <button type="submit">추가하기</button>
    </form>
  );
}

export default Form;
