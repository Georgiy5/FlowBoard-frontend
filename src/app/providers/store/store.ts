import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/entities/api";
import { boardModalSlice } from "@/features/CreateBoardModal";
import { columnModalSlice } from "@/features/CreateColumnModal";
import { taskModalSlice } from "@/features/CreateTaskModal";
import { navSlice } from "@/widgets/NavMenu";


export const store = configureStore({
    reducer: {
        [api.reducerPath] : api.reducer,
        boardModal: boardModalSlice.reducer,
        columnModal: columnModalSlice.reducer,
        taskModal: taskModalSlice.reducer,
        nav: navSlice.reducer
    },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch