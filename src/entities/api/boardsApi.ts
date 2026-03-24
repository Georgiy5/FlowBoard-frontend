import { api } from "./baseApi";

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

interface UpdateTask {
    id: number,
    title: string,
    order: number
}

interface NewOrder {
    id: number,
    order: number
}

interface UpdateOrder {
    id: number
    tasks: NewOrder[]
}

interface Assignee {
    id: number,
    email: string,
    password: string,
    name: string
}

interface UpdateOrderResponse {
    id: number,
    title: string,
    description: string,
    order: number,
    columnId: number,
    assigneeId: number,
    assignee: Assignee
}
 
export const boardsApi = api.injectEndpoints({
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
            invalidatesTags: ['Tasks']
        }),

        deleteTask: builder.mutation<Task, number>({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tasks']
        }),

        updateTask: builder.mutation<Task, UpdateTask>({
            query: ({ id, ...task}) => ({
                url: `tasks/${id}`,
                method: 'PUT',
                body: task
            }),
            invalidatesTags: ['Tasks']
        }),

        getTasksByColumn: builder.query<Task[] , number>({
            query: (id) => `tasks/column/${id}`,
            providesTags: ['Tasks']
        }),

        deleteColumn: builder.mutation<Column, number>({
            query: (id) => ({
                url: `columns/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Columns']
        }),        

        patchOrder: builder.mutation<UpdateOrderResponse[], UpdateOrder>({
            query: ({id, ...body}) => ({
                url: `tasks/column/${id}/reorder`,
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: ['Tasks']
        })
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
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useDeleteColumnMutation,
    useGetTasksByColumnQuery,
    usePatchOrderMutation
} = boardsApi