import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./slices/apis";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
}); //1 creamos el store en el archivo store.js con el reducer de counterSlice
