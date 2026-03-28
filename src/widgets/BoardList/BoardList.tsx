import { useAppDispatch } from "@/app/providers/store";
import { BoardCard } from "@/features/BoardCard";
import { openBoardModal } from "@/features/CreateBoardModal";
import Button from "@/shared/ui/Button";
import styles from './BoardList.module.css'
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import type { BoardListProps } from "./type";

export default function BoardList({data, isLoading, isError, favorite} : BoardListProps) {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleCreateBoard = useCallback(() => {
        dispatch(openBoardModal())
    }, [dispatch])

    const handleCardClick = useCallback((id: string | number,) => {

            navigate(`/boards/${id}`);
    }, [navigate]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка</div>;
    if (!data || !Array.isArray(data)) return <div>Нет данных</div>;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{favorite ? 'Избранное' : 'Ваши доски'}</p>
                {!favorite ? 
                    <Button
                        appearance={'big'}
                        onClick={handleCreateBoard}
                        text={'Создать доску'}
                    />
                    : ''}      
            </div>
            <div className={styles.list}>
                {data.map((el) => (
                    <BoardCard
                        count={el.columns.length}
                        id={el.id}
                        onClick={() => handleCardClick(el.id)}
                        key={el.id}
                        title={el.title}
                    />
                ))}
            </div>
        </div>
    )
}