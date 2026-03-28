export { api, baseQuery } from './baseApi'

export { boardsEndpoints } from './boards.endpoints'
export { columnsEndpoints } from './columns.endpoints'
export { tasksEndpoints } from './tasks.endpoints'

export {
  useGetBoardsQuery,
  useGetBoardsByIdQuery,
  usePostBoardMutation,
  useDeleteBoardMutation,
} from './boards.endpoints'

export {
  useGetBoardColumnsByIdQuery,
  usePostColumnMutation,
  useDeleteColumnMutation,
} from './columns.endpoints'

export {
  usePostTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useGetTasksByColumnQuery,
  usePatchOrderMutation,
} from './tasks.endpoints'

export type {
  Board,
  BoardOwner,
  BoardMutationResult,
  CreateBoardDto,
  Column,
  ColumnWithTasks,
  CreateColumnDto,
  Task,
  TaskAssignee,
  CreateTaskDto,
  UpdateTaskDto,
  TaskOrderItem,
  ReorderTasksDto,
  TaskWithAssignee,
} from './types'

export { loginApi, useLoginMutation, useRegisterMutation } from './loginApi'
