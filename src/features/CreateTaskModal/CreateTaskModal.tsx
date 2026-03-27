import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/providers/store'
import Button from '@/shared/ui/Button'
import CloseButton from '@/shared/ui/CloseButton'
import Input from '@/shared/ui/Input'
import styles from './CreateTaskModal.module.css'
import cn from 'classnames'    
import { usePostTaskMutation } from '@/entities/api'
import { closeTaskModal } from './model/taskModalSlice'

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