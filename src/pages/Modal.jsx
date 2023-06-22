import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Modal() {
  const params = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const navigate = useNavigate();

  const foundTodos = todos.find((item) => {
    return item.id == params.id;
  });

  return (
    <div>
      <p>{foundTodos.id}</p>
      <p>{foundTodos.title}</p>
      <p>{foundTodos.contents}</p>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        이전으로
      </button>
    </div>
  );
}

export default Modal;
