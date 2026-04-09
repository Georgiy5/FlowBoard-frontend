import styles from './BoardPage.module.css'
import { useGetBoardsByIdQuery } from '@/entities/api'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ColumnList } from '@/widgets/ColumnList'
import { BoardNav } from '@/features/BoardNav'
import { CreateColumnModal } from '@/features/CreateColumnModal'


export default function BoardPage () {

    const [countColumns, setCountColumns] = useState<number>()
    const [countTasks, setCountTasks] = useState<number>()

    const columns = useCallback((num : number) => {
        setCountColumns(num)
    }, [])

    const tasks = useCallback((num : number) => {
        setCountTasks(num)
    }, [])

    const { id } = useParams();

    const param = Number(id)
    const {data} = useGetBoardsByIdQuery(param)

    return (
        <div className={styles.page}>
            <BoardNav 
                title={data ? data.title : ''}
                countColumn={countColumns ? countColumns : 0}
                countTask={countTasks ? countTasks : 0}
            />

            <ColumnList
                columns={columns}
                tasks={tasks}
            />
            <CreateColumnModal boardId={Number(id)}/>
        </div>

    )
}