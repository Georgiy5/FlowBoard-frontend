import type { Task } from './task.types'

export interface Column {
  id: number
  title: string
  order: number
  boardId: number
}

export interface ColumnWithTasks extends Column {
  tasks: Task[]
}

export interface CreateColumnDto {
  title: string
  boardId: number
}
