import { useDeleteTaskMutation, useGetTasksByColumnQuery, useUpdateTaskMutation} from "@/entities/api";
import { TaskCard } from "@/features/TaskCard";
import type { TaskListProps, Task, NewOrder } from "./type";
import styles from './TaskList.module.css'
import { ReactSortable } from "react-sortablejs";
import { useEffect, useState } from "react";
import { usePatchOrderMutation } from "@/entities/api/boardsApi";



export default function TaskList( { column } : { column: TaskListProps}) {
    const {data} = useGetTasksByColumnQuery(column.id)
    const [list, setList] = useState<Task[]>([])
    const [patchOrder] = usePatchOrderMutation()

    useEffect(() => {
        if (data) {
            const mutableData = data.map(task => ({ ...task }));
            if (list.length === 0 || list.length !== mutableData.length) {
                setList(mutableData);
            }
        }
    }, [data]);

    
 
    
    const [deleteTask] = useDeleteTaskMutation()
    return (
        <div className={styles.taskList}>
            <ReactSortable
                key={column.id}
                list={list}
                setList={async (newList) => {
                    console.log('Старый list:', list.map(t => t.id));    // [1, 2, 3]
                    console.log('Новый newList:', newList.map(t => t.id));
                    setList(newList)
                    const newOrder: NewOrder[] = []
                    for (let i = 0; i < newList.length; i++) {
                        newOrder.push({
                            id: newList[i].id,
                            order: i
                        })
                    }
                    await patchOrder({
                        id: column.id,
                        tasks: newOrder
                    })

                }}
                animation={150}
            >
                {list ? list.map(task => (
                    <TaskCard
                        id={task.id}
                        onClick={(event: React.MouseEvent) => {
                            event.stopPropagation()
                            deleteTask(task.id)
                        }}
                        dataId={task.id} 
                        key={task.id}
                        title={task.title}
                        description={task.description}
                    />
                )) : ''}
            </ReactSortable>
        </div>
    )
}

