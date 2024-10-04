import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: contactReducer,
  },
});
