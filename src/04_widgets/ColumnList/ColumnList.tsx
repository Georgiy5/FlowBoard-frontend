import cn from 'classnames'
import styles from './ColumnList.module.css'
import { useParams } from 'react-router-dom'
import { useDeleteColumnMutation, useDeleteTaskMutation, useGetBoardColumnsByIdQuery } from '../../06_entities/api/boardsApi'
import { useEffect } from 'react'
import { useAppDispatch } from '../../06_entities/hooks/hooks'
import { openTaskModal } from '../../05_features/CreateTaskModal/model/taskModalSlice'
import CreateTaskModal from '../../05_features/CreateTaskModal/CreateTaskModal'
import type { ColumnProps } from './type'
import TaskList from '../../05_features/TasksList/TaskList'



export default function Column ({tasks, columns} : ColumnProps) {

    
    const { id } = useParams()
    const {data} = useGetBoardColumnsByIdQuery(Number(id))
    const dispatch = useAppDispatch()
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
                            <button 
                                onClick={() => {
                                    if (e.tasks.length === 0) {
                                        deleteColumn(e.id)
                                    }

                                }} 
                                className={styles.dots}><img className={styles.dotsSVG} src="/bucket2.svg"/></button>
                        </div>
                    </div>
                    <TaskList data={e}/>
                </div>
            ))}
            <CreateTaskModal/>
        </div>
    )
}