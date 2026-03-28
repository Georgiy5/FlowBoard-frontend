import type { BoardMutationResult } from "./board.types";
import type { Column } from "./column.types";


export interface Favorite {
    id: number,
    title: string,
    ownerId: number,
    columns: Column[]
}

export interface AddFavoriteResponse {
  id: number,
  userId: number,
  boardId: number,
  createdAt: string,
  board: BoardMutationResult
}

export interface DeleteFavoriteResponse {
    success: boolean,
    boardId: number
}

export interface isFavorite {
    isFavorite: boolean
}