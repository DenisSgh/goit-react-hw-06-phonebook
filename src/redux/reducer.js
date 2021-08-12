import { combineReducers } from 'redux';
import { ADD, DELETE, CHANGE_FILTER } from './actionTypes';

const items = (
  state = JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  { type, payload },
) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
