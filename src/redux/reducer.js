import { ADD, DELETE, CHANGE_FILTER } from './actionTypes';

const initialState = {
  contacts: {
    items: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    filter: '',
  },
};

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD:
// return {
//   ...state,
//   contacts: {
//     ...state.contacts,
//     items: [...state.contacts.items, payload],
//   },
// };

// case DELETE:
//   return {
//     ...state,
//     contacts: {
//       ...state.contacts,
//       filter: state.contacts.items.filter(
//         contact => contact.id !== payload,
//       ),
//     },
//   };

// case CHANGE_FILTER:
//   return {
//     ...state,
//     contacts: {
//       ...state.contacts,
//       filter: [...state.contacts.filter, payload],
//     },
//   };

//     default:
//       return state;
//   }
// };

// export default reducer;

// const initialState = {
//   contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
//   filter: '',
// };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };

    case DELETE:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(contact => contact.id !== payload),
        },
      };

    case CHANGE_FILTER:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
