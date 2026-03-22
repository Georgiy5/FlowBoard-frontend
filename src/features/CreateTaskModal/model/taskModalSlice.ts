import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface initialState {
    isActive: boolean,
    selectedColumn: null | number
}

const initialState : initialState = {
    isActive : false,
    selectedColumn: null
}

export const taskModalSlice = createSlice({
  name: 'TaskModal',
  initialState,
  reducers: {
    openTaskModal: (state, action : PayloadAction<number>) => {
        state.isActive = true,
        state.selectedColumn = action.payload
    },
    closeTaskModal: (state) => {
        state.isActive = false
        state.selectedColumn = null
    }
    
  },
});

export const { openTaskModal, closeTaskModal } = taskModalSlice.actions;
