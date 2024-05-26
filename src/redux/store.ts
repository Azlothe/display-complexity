import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { canvasSlice } from "./slices/canvasSlice";
import { pixelSlice } from "./slices/pixelSlice";

// pass in slices to combine into combineSlices()
// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(canvasSlice, pixelSlice);

// Infer the `RootState` type from the root reducer
type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

// Infer the type of `store`
type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
type AppDispatch = AppStore["dispatch"];

export default store;
export type { RootState, AppStore, AppDispatch };
