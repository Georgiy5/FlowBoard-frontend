import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/providers/store'
import Button from '@/shared/ui/Button'
import CloseButton from '@/shared/ui/CloseButton'
import Input from '@/shared/ui/Input'
import styles from './CreateColumnModal.module.css'
import cn from 'classnames'    
import { closeColumnModal } from './model/columnModalSlice'
import { usePostColumnMutation } from '@/entities/api'

export default function CreateColumnModal ({boardId} : {boardId : number}) {

    const isActive = useAppSelector(state => state.columnModal.isActive)
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('')

    const [postBoard] = usePostColumnMutation()
    
    const post = () => {
        postBoard({title: title, boardId: boardId})
        dispatch(closeColumnModal())
        setTitle('')
    }
    
    return (
        <div 
            className={cn(styles['modal'], {
                [styles['isActive']] : isActive
        })}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                event.stopPropagation()
                dispatch(closeColumnModal())
            }}        
        >
            <div 
                className={cn(styles['window'])}
                onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}        
            >
                <div className={cn(styles['crossContainer'])}>
                    <CloseButton
                        classN={'close'}
                        onClick={() => dispatch(closeColumnModal())}
                    />
                </div>
                <Input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                    value={title}
                    type={'text'}
                    placeholder={'Название колонки'}
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