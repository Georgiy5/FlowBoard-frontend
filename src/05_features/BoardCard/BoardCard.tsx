import cn from 'classnames'
import styles from './BoardCard.module.css'
import type { BoardCardProps } from './types'
import Button from '../../07_shared/ui/Button/Button'
import { useState } from 'react';

export default function BoardCard ({title, onClick} : BoardCardProps) {

    const [color] = useState(() => 
        `hsl(${Math.random() * 360}, 70%, 80%)` // Случайный оттенок, 70% насыщенности, 80% светлоты
    );

    return (
        <div onClick={onClick} className={cn(styles['card'])}>
            <div className={cn(styles['header'])}>
                <div style={{backgroundColor: color}} className={cn(styles['cube'])}>
                    <img src="cube.svg" className={cn(styles['cubeSvg'])}/>
                </div>
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    )
}