export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SEARCH_TODO = 'SEARCH_TODO';


export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
    completed: false,
  },
});

export const completeTodo = (index) => ({
  type: COMPLETE_TODO,
  payload: {
    index,
  },
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: {
    index,
  },
});

export const searchTodo = (searchTerm) => ({ 
  type: SEARCH_TODO,
  payload: {
    searchTerm,
  },
});