import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/UserSlice';

// could be regular object instead of combineReducers
const rootReducer = combineReducers({
  userReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
