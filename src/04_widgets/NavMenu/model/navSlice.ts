import { createSlice } from "@reduxjs/toolkit";


export const navSlice = createSlice({
  name: 'nav',
  initialState: { isOpened : true },
  reducers: {
    toggleNav: (state) => {
        state.isOpened = !state.isOpened
    }
    
  },
});

export const { toggleNav } = navSlice.actions;
