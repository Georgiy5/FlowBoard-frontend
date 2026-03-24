export interface TaskListProps {
    id: number,
    title: string,
    order: number,
    boardId: number,
    tasks: Task[]
}

export interface Task {
    id: number,
    title: string,
    description: string,
    order: number,
    columnId: number,
    assigneeId: number
}

export interface NewOrder {
    id: number,
    order: number
}