import type { TaskCardProps } from "./type";
import styles from './TaskCard.module.css'
import Button from "../../07_shared/ui/Button/Button";


export default function ({title, description, onClick} : TaskCardProps) {


    return (
        <div className={styles.card}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <Button
                className={styles.delete}
                onClick={onClick}
                appearance={'deleteTask'}
                text={'удалить задачу'}
            />
        </div>
    )
}