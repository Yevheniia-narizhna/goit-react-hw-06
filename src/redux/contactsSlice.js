import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //initialState=state//
  items: [],
  filter: "",
};
const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.items.filter((item) => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    changeSearch: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectContact = (state) => state.contacts.items;
export const selectFilter = (state) => state.contacts.filter;
export const contactReducer = slice.reducer;

export const { deleteContact, addContact, changeSearch } = slice.actions;
