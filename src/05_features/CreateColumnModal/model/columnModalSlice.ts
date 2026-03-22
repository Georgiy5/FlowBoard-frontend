import { createSlice } from "@reduxjs/toolkit";


export const columnModalSlice = createSlice({
  name: 'ColumnModal',
  initialState: { isActive : false },
  reducers: {
    openColumnModal: (state) => {
        state.isActive = true
    },
    closeColumnModal: (state) => {
        state.isActive = false
    }
    
  },
});

export const { openColumnModal, closeColumnModal } = columnModalSlice.actions;
