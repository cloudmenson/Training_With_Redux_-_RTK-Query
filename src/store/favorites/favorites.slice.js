import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const isExist = state.some((r) => r.id === recipe.id);

      if (isExist) {
        return state.filter((item) => item.id !== recipe.id);
      } else {
        return [...state, recipe];
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
