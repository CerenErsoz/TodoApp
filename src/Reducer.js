
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, SEARCH_TODO } from './Actions';

const initialState = {
  todos: [],
  searchTerm: "",
  filteredTodos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {text: action.payload.text, completed: false}],
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index ? { ...todo, completed: true } : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload.index),
      };

    case SEARCH_TODO:
      const searchTerm = action.payload.searchTerm.toLowerCase();
      const filteredTodos = state.todos.filter(todo =>
        todo.text.toLowerCase().includes(searchTerm)
      );
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        filteredTodos,
      };

    default:
      return {
        ...state,
        filteredTodos: state.todos,//default durumda tüm todoları filtered todo olarak ayarlamak için
      };
  }
};

export default todoReducer;
