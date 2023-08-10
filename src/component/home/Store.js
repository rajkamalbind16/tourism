// store.js
import { createStore } from 'redux';

const initialState = {
  searchQuery: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
