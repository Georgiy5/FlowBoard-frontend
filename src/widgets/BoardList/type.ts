import type { Board } from "@/entities/api";
import type { Favorite } from "@/entities/api/types";

export interface BoardListProps {
    data: Board[] | Favorite[] | undefined,
    isLoading: boolean,
    isError: boolean,
    favorite: boolean
}