import { tasksEndpoints, useDeleteTaskMutation, useGetTasksByColumnQuery, usePatchOrderMutation, usePostTaskMutation } from "@/entities/api";
import { TaskCard } from "@/features/TaskCard";
import type { NewOrder, Task, TaskListProps } from "./type";
import styles from './TaskList.module.css'
import { ReactSortable } from "react-sortablejs";
import { useAppDispatch } from "@/app/providers/store";


export default function TaskList( { column } : { column: TaskListProps}) {

    const {data: listFromCache = []} = useGetTasksByColumnQuery(column.id)
    const list = listFromCache.map(task => ({...task}))
    const dispatch = useAppDispatch()
    const [patchOrder] = usePatchOrderMutation() 
    const [deleteTask] = useDeleteTaskMutation()
    const [postTask] = usePostTaskMutation()

    const saveOrder = async (newList: Task[]) => {
        const newOrder: NewOrder[] = newList.map((task, index) => ({
            id: task.id,
            order: index * 1000
        }));
            
        try {
            await patchOrder({
                id: column.id,
                tasks: newOrder
            });
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <div className={styles.taskList}>
            <ReactSortable
                key={column.id}
                list={list}
                setList={async (newList) => {
                    const copy : Task[] = JSON.parse(JSON.stringify(newList))
                    const filtered = copy.filter(e => e.columnId !== column.id)
                        dispatch(
                            tasksEndpoints.util.updateQueryData(
                                'getTasksByColumn',
                                column.id,
                                () => copy
                            )
                        )
                        await saveOrder(copy)                           
                        if (filtered.length > 0) {
                            await deleteTask(filtered[0].id)
                        }

                }}
                onAdd={async (event) => {
                    const { item, newIndex } = event;
                    const movedTask = {
                        columnId: Number(item.getAttribute('column-id')),
                        title: String(item.getAttribute('title-attr')),
                        description: String(item.getAttribute('descr-attr')),
                    }

                    const oldColumnId = movedTask.columnId;

                    if (oldColumnId !== column.id) {
                         try {
                            await postTask({
                            title: movedTask.title,
                            description: movedTask.description,
                            columnId: column.id,
                            order: Number(newIndex)
                        })  
                        } catch (error) {
                            console.log(error,'post')
                        }      
                    }
            }}
                group={{ name: 'columns', pull: true, put: true }}
                animation={150}
            >
                {list ? list.map(task => (
                    <TaskCard
                        id={task.id}
                        onClick={(event: React.MouseEvent) => {
                            event.stopPropagation()
                            deleteTask(task.id)
                        }}
                        columnId={task.columnId}
                        dataId={task.id} 
                        key={task.id}
                        titleAttr={task.title}
                        title={task.title}
                        descrAttr={task.description ?? ''}
                        description={task.description ?? ''}
                    />
                )) : ''}
            </ReactSortable>
        </div>
    )
}

