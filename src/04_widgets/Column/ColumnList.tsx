import cn from 'classnames'
import styles from './ColumnList.module.css'
import TaskCard from '../TaskCard/TaskCard'
import { useParams } from 'react-router-dom'
import { useGetBoardColumnsByIdQuery } from '../../06_entities/store/boardsApi'
import { useEffect } from 'react'

export default function Column () {
    
    const { id } = useParams()
    const {data} = useGetBoardColumnsByIdQuery(Number(id))

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
                    <p>{e.title}</p>
                    {e.tasks.map(task => (
                        <TaskCard
                            key={task.id}
                            title={task.title}
                            description={task.description}
                        />
                    ))}
                </div>
            ))}
        </div>

        // <div className={cn(styles['column'])}>
            
                

        // </div>
    )
}