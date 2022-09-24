//import { legacy_createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contacts/contactsReduser';

//import { combineReducers } from 'redux';
//import { devToolsEnhancer } from 'redux-devtools-extension';

//const rootReduser = combineReducers({
//  contacts: contactsReduser,
//});

//const store = legacy_createStore(rootReduser, devToolsEnhancer());

import { createLogger } from 'redux-logger';

const logger = createLogger({
  timestamp: false,
  collapsed: true,
});

const store = configureStore({
  reducer: contactsReduser,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
