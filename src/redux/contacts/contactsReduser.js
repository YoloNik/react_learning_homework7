import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { removeContact, setContacts, addContact } from './contactsActions';
import { filterChange } from './filtersActions';

//const itemsReducer = (state = [], action) => {
//  switch (action.type) {
//    case 'SET_CONTACTS':
//      return action.payload;
//    case 'ADD_CONTACT':
//      return [...state, action.payload];
//    case 'REMOVE_CONTACT':
//      return state.filter(el => el.id !== action.payload);

//    default:
//      return state;
//  }
//};

//const filterReduser = (state = '', action) => {
//  switch (action.type) {
//    case 'FILTER_CHANGE':
//      return action.payload;

//    default:
//      return state;
//  }
//};

const itemsReducer = createReducer([], {
  [setContacts]: (_, action) => action.payload,
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const filterReduser = createReducer('', {
  [filterChange]: (_, action) => action.payload,
});

const contactsReduser = combineReducers({
  items: itemsReducer,
  filter: filterReduser,
});

export default contactsReduser;
