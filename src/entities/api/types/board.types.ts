import type { Column } from './column.types'

export interface BoardOwner {
  id: number
  email: string
  name: string
}

export interface Board {
  id: number
  title: string
  ownerId: number
  owner: BoardOwner
  columns: Column[]
}

export interface CreateBoardDto {
  title: string
}

export interface BoardMutationResult {
  id: number
  title: string
  ownerId: number
}
