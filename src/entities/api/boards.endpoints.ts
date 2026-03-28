import { api } from './baseApi'
import type {
  Board,
  BoardMutationResult,
  CreateBoardDto,
} from './types'

export const boardsEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getBoards: builder.query<Board[], void>({
      query: () => 'boards',
      providesTags: ['Boards'],
    }),

    getBoardsById: builder.query<Board, number>({
      query: (id) => `boards/${id}`,
    }),

    postBoard: builder.mutation<BoardMutationResult, CreateBoardDto>({
      query: (newBoard) => ({
        url: 'boards',
        method: 'POST',
        body: newBoard,
      }),
      invalidatesTags: ['Boards'],
    }),

    deleteBoard: builder.mutation<BoardMutationResult, number>({
      query: (id) => ({
        url: `boards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards'],
    }),
  }),
})

export const {
  useGetBoardsQuery,
  useGetBoardsByIdQuery,
  usePostBoardMutation,
  useDeleteBoardMutation,
} = boardsEndpoints
