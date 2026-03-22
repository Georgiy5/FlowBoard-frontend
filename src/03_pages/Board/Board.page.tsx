import cn from 'classnames'
import styles from './BoardPage.module.css'
import { useGetBoardsByIdQuery } from '../../06_entities/api/boardsApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ColumnList from '../../04_widgets/ColumnList/ColumnList'
import Button from '../../07_shared/ui/Button/Button'
import CreateColumnModal from '../../05_features/CreateColumnModal/CreateColumn'
import { useAppDispatch } from '../../06_entities/hooks/hooks'
import { openColumnModal } from '../../05_features/CreateColumnModal/model/columnModalSlice'
import BoardNav from '../../05_features/BoardNav/BoardNav'


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