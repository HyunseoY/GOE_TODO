// Action value
const ADD_TODO = 'todos/ADD_TODO';

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const initialState = {
  todos: [
    {
      title: '제목',
      content: '내용',
      id: Date.now(),
      isDone: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todos;
