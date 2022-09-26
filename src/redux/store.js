import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contactsSlice';

const store = configureStore({
  reducer: contactsSlice,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
