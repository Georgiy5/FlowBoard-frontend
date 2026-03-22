import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/providers/store'
import { usePostBoardMutation } from '@/entities/api'
import { closeBoardModal } from './model/boardModalSlice'
import Button from '@/shared/ui/Button'
import CloseButton from '@/shared/ui/CloseButton'
import Input from '@/shared/ui/Input'
import styles from './CreateBoardModal.module.css'
import cn from 'classnames'    

export default function CreateBoardModal () {

    const isActive = useAppSelector(state => state.boardModal.isActive)
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('')

    const [postBoard, {data}] = usePostBoardMutation()
    
    const post = () => {
        postBoard({title})
        dispatch(closeBoardModal())
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
                dispatch(closeBoardModal())
            }}        
        >
            <div 
                className={cn(styles['window'])}
                onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}        
            >
                <div className={cn(styles['crossContainer'])}>
                    <CloseButton
                        classN={'close'}
                        onClick={() => dispatch(closeBoardModal())}
                    />
                </div>
                <Input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                    value={title}
                    type={'text'}
                    placeholder={'Название доски'}
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