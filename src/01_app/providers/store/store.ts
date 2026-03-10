import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../../../06_entities/store/loginApi";
import { boardsApi } from "../../../06_entities/store/boardsApi";
import { boardModalSlice } from "../../../06_entities/store/boardModalSlice";
import { columnModalSlice } from "../../../06_entities/store/columnModalSlice";
import { taskModalSlice } from "../../../06_entities/store/taskModalSlice";
import { navSlice } from "../../../06_entities/store/navSlice";


export const store = configureStore({
    reducer: {
        [loginApi.reducerPath] : loginApi.reducer,
        [boardsApi.reducerPath] : boardsApi.reducer,
        boardModal: boardModalSlice.reducer,
        columnModal: columnModalSlice.reducer,
        taskModal: taskModalSlice.reducer,
        nav: navSlice.reducer
    },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware, boardsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch