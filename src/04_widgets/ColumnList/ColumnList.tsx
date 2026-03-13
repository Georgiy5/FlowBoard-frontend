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
import type { ColumnProps } from './type'

export default function Column ({tasks, columns} : ColumnProps) {
    
    const { id } = useParams()
    const {data} = useGetBoardColumnsByIdQuery(Number(id))
    const dispatch = useAppDispatch()
    const [deleteTask] = useDeleteTaskMutation()
    const [deleteColumn] = useDeleteColumnMutation()



    useEffect(() => {
        console.log(data)
    }, [data])


    useEffect(() => {
        if (data) {
            let count = 0
            data.map(e => count += e.tasks.length)
            tasks(count)
        }
  
    }, [data])

    useEffect(() => {
        if (data) {
            columns(data.length)
        }
  
    }, [data])

    return (
        <div className={cn(styles['container'])}>

            {data?.map(e => (
                <div
                    className={styles['column']}
                    key={e.id}
                >   
                    <div className={styles.header}>
                        <p className={styles.title}>{e.title}</p>
                        <div className={styles.buttons}>
                            <button onClick={() => dispatch(openTaskModal(e.id))} className={styles.dots}><img className={styles.dotsSVG} src="/Plus.svg"/></button>
                            <button onClick={() => deleteColumn(e.id)} className={styles.dots}><img className={styles.dotsSVG} src="/bucket2.svg"/></button>
                        </div>
                    </div>
                    <div className={styles.taskList}>
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