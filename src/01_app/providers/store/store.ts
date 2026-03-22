import { configureStore } from "@reduxjs/toolkit";
import { api } from "../../../06_entities/api/baseApi";
import { boardModalSlice } from "../../../05_features/CreateBoardModal/model/boardModalSlice";
import { columnModalSlice } from "../../../05_features/CreateColumnModal/model/columnModalSlice";
import { taskModalSlice } from "../../../05_features/CreateTaskModal/model/taskModalSlice";
import { navSlice } from "../../../04_widgets/NavMenu/model/navSlice";


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