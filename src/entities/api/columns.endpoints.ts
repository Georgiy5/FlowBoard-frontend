import { api } from './baseApi'
import type { Column, ColumnWithTasks, CreateColumnDto } from './types'

export const columnsEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getBoardColumnsById: builder.query<ColumnWithTasks[], number>({
      query: (id) => `columns/board/${id}`,
      providesTags: ['Columns'],
    }),

    postColumn: builder.mutation<Column, CreateColumnDto>({
      query: (newColumn) => ({
        url: 'columns',
        method: 'POST',
        body: newColumn,
      }),
      invalidatesTags: ['Columns'],
    }),

    deleteColumn: builder.mutation<Column, number>({
      query: (id) => ({
        url: `columns/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
  }),
})

export const {
  useGetBoardColumnsByIdQuery,
  usePostColumnMutation,
  useDeleteColumnMutation,
} = columnsEndpoints
