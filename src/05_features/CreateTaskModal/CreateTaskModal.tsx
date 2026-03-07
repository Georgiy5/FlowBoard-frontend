import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../01_app/providers/store/hooks'
import Button from '../../07_shared/ui/Button/Button'
import CloseButton from '../../07_shared/ui/CloseButton/CloseButton'
import Input from '../../07_shared/ui/Input/Input'
import styles from './CreateTaskModal.module.css'
import cn from 'classnames'    
import { usePostTaskMutation } from '../../06_entities/store/boardsApi'
import { closeTaskModal } from '../../06_entities/store/taskModalSlice'

export default function CreateTaskModal () {

    const isActive = useAppSelector(state => state.taskModal.isActive)
    const selectedColumn = useAppSelector(state => state.taskModal.selectedColumn)
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')

    const [postTask, {data}] = usePostTaskMutation()    
    const post = () => {
        if (selectedColumn) {
            postTask({title, description: descr, columnId: selectedColumn})
            dispatch(closeTaskModal())
            setTitle('')
            setDescr('')
        }

    }

    useEffect(() => {
        console.log(data);
    }, [data])
    
    return (
        <div 
            className={cn(styles['modal'], {
                [styles['isActive']] : isActive
        })}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                event.stopPropagation()
                dispatch(closeTaskModal())
            }}        
        >
            <div 
                className={cn(styles['window'])}
                onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}        
            >
                <div className={cn(styles['crossContainer'])}>
                    <CloseButton
                        classN={'close'}
                        onClick={() => dispatch(closeTaskModal())}
                    />
                </div>
                <Input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                    value={title}
                    type={'text'}
                    placeholder={'Название задачи'}
                />
                <Input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescr(event.target.value)}
                    value={descr}
                    type={'text'}
                    placeholder={'Описание задачи'}
                />
                <Button
                    appearance={'big'}
                    onClick={post}
                    text={'Создать'}
                />
            </div>

        </div>
    )
}