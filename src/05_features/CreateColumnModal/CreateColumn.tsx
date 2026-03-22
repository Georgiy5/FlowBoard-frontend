import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../06_entities/hooks/hooks'
import Button from '../../07_shared/ui/Button/Button'
import CloseButton from '../../07_shared/ui/CloseButton/CloseButton'
import Input from '../../07_shared/ui/Input/Input'
import styles from './CreateColumnModal.module.css'
import cn from 'classnames'    
import { closeColumnModal } from './model/columnModalSlice'
import { usePostColumnMutation } from '../../06_entities/api/boardsApi'

export default function CreateColumnModal ({boardId} : {boardId : number}) {

    const isActive = useAppSelector(state => state.columnModal.isActive)
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('')

    const [postBoard, {data}] = usePostColumnMutation()
    
    const post = () => {
        postBoard({title: title, boardId: boardId})
        dispatch(closeColumnModal())
        setTitle('')
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