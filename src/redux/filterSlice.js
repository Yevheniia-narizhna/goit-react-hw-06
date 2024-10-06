import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    changeSearch: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectFilter = (state) => state.contacts.filter;
export const filterReducer = filterSlice.reducer;
export const { changeSearch } = filterSlice.actions;
