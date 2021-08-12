import { ADD, DELETE, CHANGE_FILTER } from './actionTypes';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: DELETE,
  payload: id,
});

const changeFilter = query => ({
  type: CHANGE_FILTER,
  payload: query,
});

export { addContact, deleteContact, changeFilter };
