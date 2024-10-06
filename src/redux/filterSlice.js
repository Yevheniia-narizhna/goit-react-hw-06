import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeSearch: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filters.name;
export const filterReducer = filterSlice.reducer;
export const { changeSearch } = filterSlice.actions;
