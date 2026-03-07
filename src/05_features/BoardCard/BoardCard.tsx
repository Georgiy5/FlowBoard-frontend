import cn from 'classnames'
import styles from './BoardCard.module.css'
import type { BoardCardProps } from './types'
import Button from '../../07_shared/ui/Button/Button'

export default function BoardCard ({title, onClick} : BoardCardProps) {


    return (
        <div className={cn(styles['card'])}>
            <div className={cn(styles['header'])}>
                <div className={cn(styles['cube'])}>
                    <img src="cube.svg" alt="" className={cn(styles['cubeSvg'])}/>
                </div>
                <p>{title}</p>
            </div>
            <div className={cn(styles['description'])}>
                descripton
            </div>
            <Button
                appearance={'small'}
                text={'открыть'}
                onClick={onClick}
            />




        </div>
    )
}