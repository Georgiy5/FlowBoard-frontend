import cn from 'classnames'
import styles from './ColumnList.module.css'
import TaskCard from '../../05_features/TaskCard/TaskCard'
import { useParams } from 'react-router-dom'
import { useDeleteColumnMutation, useDeleteTaskMutation, useGetBoardColumnsByIdQuery } from '../../06_entities/store/boardsApi'
import { useEffect } from 'react'
import Button from '../../07_shared/ui/Button/Button'
import { useAppDispatch } from '../../01_app/providers/store/hooks'
import { openTaskModal } from '../../06_entities/store/taskModalSlice'
import CreateTaskModal from '../../05_features/CreateTaskModal/CreateTaskModal'

export default function Column () {
    
    const { id } = useParams()
    const {data} = useGetBoardColumnsByIdQuery(Number(id))
    const dispatch = useAppDispatch()
    const [deleteTask] = useDeleteTaskMutation()
    const [deleteColumn] = useDeleteColumnMutation()



    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <div className={cn(styles['container'])}>

            {data?.map(e => (
                <div
                    className={styles['column']}
                    key={e.id}
                >
                    <Button
                        text={'Удалить колонку'}
                        appearance={'small'}
                        onClick={() => deleteColumn(e.id)}
                    />
                    <p>{e.title}</p>
                    <Button
                        appearance={'small'}
                        text={'добавить задачу'}
                        onClick={() => dispatch(openTaskModal(e.id))}
                    />
                    <div>
                        {e.tasks.map(task => (
                            <TaskCard
                                onClick={() => deleteTask(task.id)}
                                key={task.id}
                                title={task.title}
                                description={task.description}
                            />
                        ))}
                    </div>

                </div>
            ))}
            <CreateTaskModal/>
        </div>
    )
}