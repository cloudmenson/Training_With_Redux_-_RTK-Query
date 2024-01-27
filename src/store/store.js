import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { reducer as FavoriteReducer } from "./favorites/favorites.slice";

const reducers = combineReducers({ favorites: FavoriteReducer });

export const store = configureStore({
  reducer: reducers,
});
