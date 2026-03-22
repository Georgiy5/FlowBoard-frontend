import { useDeleteTaskMutation} from "@/entities/api";
import { TaskCard } from "@/features/TaskCard";
import type { TaskListProps } from "./type";
import styles from './TaskList.module.css'



export default function TaskList( {data} : {data : TaskListProps}) {


    const [deleteTask] = useDeleteTaskMutation()
    return (
        <div className={styles.taskList}>
                {data.tasks.map(task => (
                    <TaskCard
                        id={task.id}
                        onClick={() => deleteTask(task.id)}
                        key={task.id}
                        title={task.title}
                        description={task.description}
                    />
                ))}
        </div>
    )
}

