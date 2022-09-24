import { createAction } from '@reduxjs/toolkit';

//const setContacts = contacts => ({
//  type: 'SET_CONTACTS',
//  payload: contacts,
//});

//const addContact = newContact => ({
//  type: 'ADD_CONTACT',
//  payload: newContact,
//});

//const removeContact = contactToRemove => ({
//  type: 'REMOVE_CONTACT',
//  payload: contactToRemove,
//});

const setContacts = createAction('SET_CONTACTS');
const addContact = createAction('ADD_CONTACT');
const removeContact = createAction('REMOVE_CONTACT');

export { setContacts, addContact, removeContact };
