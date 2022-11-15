import { postApi } from './../services/PostService';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import userReducer from './reducers/UserSlice';

// could be regular object instead of combineReducers
const rootReducer = combineReducers({
  userReducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
