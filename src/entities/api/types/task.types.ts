export interface TaskAssignee {
  id: number
  email: string
  name: string
}

export interface Task {
  id: number
  title: string
  description: string | null
  order: number
  columnId: number
  assigneeId: number | null
}

export interface CreateTaskDto {
  title: string
  description: string
  columnId: number
  order?: number
}

export interface UpdateTaskDto {
  id: number
  title: string
  order: number
}

export interface TaskOrderItem {
  id: number
  order: number
}

export interface ReorderTasksDto {
  id: number
  tasks: TaskOrderItem[]
}

export interface TaskWithAssignee extends Task {
  assignee: TaskAssignee
}
