import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/providers/store'
import Button from '@/shared/ui/Button'
import CloseButton from '@/shared/ui/CloseButton'
import Input from '@/shared/ui/Input'
import styles from './CreateColumnModal.module.css'
import cn from 'classnames'    
import { closeColumnModal } from './model/columnModalSlice'
import { usePostColumnMutation } from '@/entities/api'
import { useEscapeKey } from '@/entities/hooks'

export default function CreateColumnModal ({boardId} : {boardId : number}) {

    const isActive = useAppSelector(state => state.columnModal.isActive)
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('')

    const [postBoard] = usePostColumnMutation()

    const post = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        postBoard({title: title, boardId: boardId})
        dispatch(closeColumnModal())
        setTitle('')
    }

    useEffect(() => {
        if (isActive && inputRef.current) {
            const timer = setTimeout(() => {
            inputRef.current?.focus()
        }, 50)
        return () => clearTimeout(timer)
        }
  }, [isActive])

    const inputRef = useRef<HTMLInputElement>(null)

    useEscapeKey(() => {
        dispatch(closeColumnModal())
    }, isActive)
    
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
                <form onSubmit={post} className={styles.form}>
                    <div className={cn(styles['crossContainer'])}>
                        <CloseButton
                            classN={'close'}
                            onClick={() => dispatch(closeColumnModal())}
                        />
                    </div>
                    <Input
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                        ref={inputRef}
                        value={title}
                        type={'text'}
                        placeholder={'Название колонки'}
                    />
                    <Button
                        appearance={'big'}
                        type='submit'
                        text={'Создать'}
                    />
                </form>
            </div>
        </div>
    )
}