import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./slices/builder";

const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
