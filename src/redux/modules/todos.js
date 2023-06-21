const initialState = {
  title: '',
  content: '',
  id: Date.now(),
  isDone: false,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
