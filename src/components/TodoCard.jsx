import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/modules/todos';
import { styled } from 'styled-components';
import Delete from 'img/Delete.png';
import Detail from 'img/Detail.png';
import Check from 'img/Check.png';

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
    <>
      <StH2>{isDone ? 'DONE' : 'WORKING'}</StH2>
      {todos
        .filter((item) => isDone === item.isDone)
        .map((item) => {
          return (
            <StDiv key={item.id}>
              <StUpdateBtn onClick={() => onClickUpdateBtn(item.id)}>
                <StUpdateImg src={Check} alt="체크버튼" />
              </StUpdateBtn>
              {isDone ? '취소' : '완료'}
              <StSpan>
                <StP>{item.title}</StP>
                <StP>{item.contents}</StP>
              </StSpan>
              <StImg src={Detail} alt="상세보기" />
              <StDeleteBtn onClick={() => onClickDeleteBtn(item.id)}>
                <StImg src={Delete} alt="삭제버튼" />
              </StDeleteBtn>
            </StDiv>
          );
        })}
    </>
  );
}

export default TodoCard;

const StDiv = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  border-top: 0.1em solid lightgray;
`;

const StH2 = styled.h2`
  background-color: #72a6fa71;
  margin: 0 auto;
  padding: 20px;
  color: #fafafa;
  font-weight: bold;
  text-shadow: 2px 2px 6px lightgray;
`;

const StSpan = styled.span`
  margin-left: 20px;
`;

const StP = styled.p`
  background-color: white;
  color: #424141;
`;

const StUpdateBtn = styled.button`
  background-color: white;
  color: #424141;
  border: none;
`;

const StUpdateImg = styled.img`
  width: 30px;
  height: 30px;
  left: -5px;
`;

const StDeleteBtn = styled.button`
  background-color: white;
  color: #424141;
  margin-left: auto;
  border: none;
  cursor: pointer;
`;

const StImg = styled.img`
  width: 20px;
  height: 20px;
`;
