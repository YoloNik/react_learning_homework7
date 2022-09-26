import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MAIN_URL = 'https://632b2e5c1090510116d37d4c.mockapi.io/contacts';

const getContacts = createAsyncThunk('contacts/getStatus', () =>
  axios.get(MAIN_URL).then(contacts => contacts.data),
);
const postContact = createAsyncThunk('contacts/postStatus', newContact =>
  axios.post(MAIN_URL, newContact).then(contact => contact.data),
);
const deleteContact = createAsyncThunk('contacts/deleteStatus', id =>
  axios.delete(`${MAIN_URL}/${id}`).then(contact => contact.data),
);

export { getContacts, postContact, deleteContact };
