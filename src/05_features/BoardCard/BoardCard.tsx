import cn from 'classnames'
import styles from './BoardCard.module.css'
import type { BoardCardProps } from './types'
import { useState } from 'react';
import { useDeleteBoardMutation } from '../../06_entities/api/boardsApi';

export default function BoardCard ({title, onClick, id, count} : BoardCardProps) {

    const [color] = useState(() => 
        `hsl(${Math.random() * 360}, 70%, 80%)` // Случайный оттенок, 70% насыщенности, 80% светлоты
    );

    const [deleteBoard] = useDeleteBoardMutation()

    const deleteFunc = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        deleteBoard(id)
    }

    let word = ''

    switch (count) {
        case 1:
            word = 'колонка'
            break
        case 2:
            word = 'колонки'
            break
        case 3:
            word = 'колонки'
            break
        case 4:
            word = 'колонки'
            break
        default:
            word = 'колонок'

    }

    return (
        <div onClick={onClick} className={cn(styles['card'])}>
            <div className={cn(styles['header'])}>
                <div style={{backgroundColor: color}} className={cn(styles['cube'])}>
                    <img src="/cube.svg" className={cn(styles['cubeSvg'])}/>
                </div>
                <p className={styles.title}>{title}</p>
                <button onClick={deleteFunc} className={styles.dots}><img className={styles.dotsSVG} src="/bucket.svg"/></button>
            </div>
            <div className={styles.countContainer}>
                <p className={styles.count}>{count} {word}</p>
            </div>
        </div>
    )
}