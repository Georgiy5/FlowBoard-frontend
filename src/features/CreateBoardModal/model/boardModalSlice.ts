import { createSlice } from "@reduxjs/toolkit";


export const boardModalSlice = createSlice({
  name: 'boardModal',
  initialState: { isActive : false },
  reducers: {
    openBoardModal: (state) => {
        state.isActive = true
    },
    closeBoardModal: (state) => {
        state.isActive = false
    }
    
  },
});

export const { openBoardModal, closeBoardModal } = boardModalSlice.actions;
