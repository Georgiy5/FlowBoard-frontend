import cn from 'classnames'
import styles from './BoardPage.module.css'
import { useGetBoardsByIdQuery } from '@/entities/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ColumnList } from '@/widgets/ColumnList'
import Button from '@/shared/ui/Button'
import { BoardNav } from '@/features/BoardNav'
import { CreateColumnModal, openColumnModal } from '@/features/CreateColumnModal'
import { useAppDispatch } from '@/app/providers/store'


export default function BoardPage () {

    const [countColumns, setCountColumns] = useState<number>()
    const [countTasks, setCountTasks] = useState<number>()

    const columns = (num : number) => {
        setCountColumns(num)
    }

    const tasks = (num : number) => {
        setCountTasks(num)
    }

    const { id } = useParams();

    const param = Number(id)
    const dispatch = useAppDispatch()

    const {data , isLoading, isError} = useGetBoardsByIdQuery(param)

    useEffect(() => {
    console.log(data?.columns)
    }, [data])

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