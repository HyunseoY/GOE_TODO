import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/modules/todos';
import { styled } from 'styled-components';

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
    <StForm onSubmit={onSubmitAddHandler}>
      <StLabel>제목</StLabel>
      <StInput
        type="text"
        name="title"
        value={todo.title}
        onChange={onChangeHandler}
      />
      <StLabel>내용</StLabel>
      <StInput
        type="text"
        name="contents"
        value={todo.contents}
        onChange={onChangeHandler}
      />
      <StButton type="submit">추가하기</StButton>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  background: none;
  margin: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 800px;
`;

const StLabel = styled.label``;

const StInput = styled.input``;

const StButton = styled.button``;
