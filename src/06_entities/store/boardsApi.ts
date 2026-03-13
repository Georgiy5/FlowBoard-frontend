import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Owner {
    id: number,
    email: string,
    password: string,
    name: string
}

interface Columns {
    id: number,
    title: string,
    order: number,
    boardId: number
}

interface Boards {
    id: number,
    title: string,
    ownerId: number,
    owner: Owner,
    columns: Columns[],
}

interface PostBoard {
    id: number,
    title: string,
    ownerId: number
}

interface DeleteBoard {
    id: number,
    title: string,
    ownerId: number
}

interface TitleOfNewBoard {
    title: string
}

interface ID {
    id: number
}

interface Task {
    id: number,
    title: string,
    description: string,
    order: number,
    columnId: number,
    assigneeId: number
}


// {
//     "id": 10,
//     "title": "Нужно сделать",
//     "order": 0,
//     "boardId": 4,
//     "tasks": [
//       {
//         "id": 9,
//         "title": "Изучить NestJS",
//         "description": "Пройти туториал до конца",
//         "order": 0,
//         "columnId": 10,
//         "assigneeId": 6
//       },
//       {
//         "id": 10,
//         "title": "Изучить NestJS2",
//         "description": "Пройти туториал до конца",
//         "order": 0,
//         "columnId": 10,
//         "assigneeId": 6
//       }
//     ]
//   },

interface Columns {
    id: number,
    title: string,
    order: number,
    boardId: number,
    tasks: Task[]
}

interface Column {
    id: number,
    title: string,
    order: number,
    boardId: number
}

interface PostColumn {
    title: string,
    boardId: number
}
interface PostTask {
    title: string,
    description: string,
    columnId: number
}
 
export const boardsApi = createApi({
    reducerPath: 'boards',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Boards', 'Columns'],
    endpoints: (builder) => ({
        
        getBoards: builder.query<Boards[], void>({
            query: () => 'boards',
            providesTags: ['Boards'],
        }),

        getBoardsById: builder.query<Boards, number>({
            query: (id) => `boards/${id}`
        }),

        postBoard: builder.mutation<PostBoard, TitleOfNewBoard>({
            query: (newBoard) => ({
                url: 'boards',
                method: 'POST',
                body: newBoard
            }),
            invalidatesTags: ['Boards']
        }),

        getBoardColumnsById: builder.query<Columns[] , number>({
            query: (id) => `columns/board/${id}`,
            providesTags: ['Columns']
        }),

        deleteBoard : builder.mutation<DeleteBoard, number>({
            query : (id) => ({
                url: `boards/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Boards']
        }),

        postColumn: builder.mutation<Column, PostColumn>({
            query: (newColumn) => ({
                url: 'columns',
                method: 'POST',
                body: newColumn
            }),
            invalidatesTags: ['Columns']
        }),

        postTask: builder.mutation<Task, PostTask>({
            query: (newTask) => ({
                url: 'tasks',
                method: 'POST',
                body: newTask
            }),
            invalidatesTags: ['Columns']
        }),

        deleteTask: builder.mutation<Task, number>({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Columns']
        }),

        deleteColumn: builder.mutation<Column, number>({
            query: (id) => ({
                url: `columns/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Columns']
        }),        

    })

})

export const { 
    useGetBoardsQuery,
    usePostBoardMutation,
    useGetBoardsByIdQuery,
    useGetBoardColumnsByIdQuery,
    useDeleteBoardMutation,
    usePostColumnMutation,
    usePostTaskMutation,
    useDeleteTaskMutation,
    useDeleteColumnMutation
} = boardsApi