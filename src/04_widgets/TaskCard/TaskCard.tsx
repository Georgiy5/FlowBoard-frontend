import type { TaskCardProps } from "./type";
import styles from './TaskCard.module.css'
import cn from 'classnames'


export default function ({title, description} : TaskCardProps) {


    return (
        <div className={cn(styles['card'])}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}