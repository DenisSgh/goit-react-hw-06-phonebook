import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const rootReducer = combineReducers({ contacts: reducer });

const store = configureStore({ reducer: rootReducer });

export default store;
