import type { TaskCardProps } from "./type";
import styles from './TaskCard.module.css'
import cn from 'classnames'
import Button from "../../07_shared/ui/Button/Button";


export default function ({title, description, onClick} : TaskCardProps) {


    return (
        <div className={cn(styles['card'])}>
            <p>{title}</p>
            <p>{description}</p>
            <Button
                onClick={onClick}
                appearance={'small'}
                text={'удалить задачу'}
            />
        </div>
    )
}