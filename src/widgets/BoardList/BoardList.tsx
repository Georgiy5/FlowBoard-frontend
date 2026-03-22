import { useAppDispatch } from "@/app/providers/store";
import { BoardCard } from "@/features/BoardCard";
import { useGetBoardsQuery } from "@/entities/api";
import { openBoardModal } from "@/features/CreateBoardModal";
import Button from "@/shared/ui/Button";
import styles from './BoardList.module.css'
// cn можно убрать, если не нужно объединять классы, или оставить для условных классов

// Убрали Navigate, так как он не используется
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function BoardList() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { data, isLoading, isError, error } = useGetBoardsQuery()

    const handleCreateBoard = useCallback(() => {
        dispatch(openBoardModal())
    }, [dispatch])

    const handleCardClick = useCallback((id: string | number,) => {

            navigate(`/boards/${id}`);
    }, [navigate]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка: {JSON.stringify(error)}</div>;
    if (!data || !Array.isArray(data)) return <div>Нет данных</div>;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>Ваши доски</p>
                <Button
                    appearance={'big'}
                    onClick={handleCreateBoard}
                    text={'Создать доску'}
                />
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