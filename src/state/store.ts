import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import filmsReducer from './films';

const rootReducer = combineReducers({
  films: filmsReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export default store;
