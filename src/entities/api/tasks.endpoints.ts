import { api } from './baseApi'
import type {
  CreateTaskDto,
  ReorderTasksDto,
  Task,
  TaskWithAssignee,
  UpdateTaskDto,
} from './types'

export const tasksEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    postTask: builder.mutation<Task, CreateTaskDto>({
      query: (newTask) => ({
        url: 'tasks',
        method: 'POST',
        body: newTask,
      }),
      invalidatesTags: ['Tasks'],
    }),

    deleteTask: builder.mutation<Task, number>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),

    updateTask: builder.mutation<Task, UpdateTaskDto>({
      query: ({ id, ...task }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: ['Tasks'],
    }),

    getTasksByColumn: builder.query<Task[], number>({
      query: (id) => `tasks/column/${id}`,
      providesTags: ['Tasks'],
    }),

    patchOrder: builder.mutation<TaskWithAssignee[], ReorderTasksDto>({
      query: ({ id, ...body }) => ({
        url: `tasks/column/${id}/reorder`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
})

export const {
  usePostTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useGetTasksByColumnQuery,
  usePatchOrderMutation,
} = tasksEndpoints
