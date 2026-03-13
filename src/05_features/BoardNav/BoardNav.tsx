import type { BoardNavProps } from "./type";
import styles from './BoardNav.module.css'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../01_app/providers/store/hooks";
import { openColumnModal } from "../../06_entities/store/columnModalSlice";
import Button from "../../07_shared/ui/Button/Button";


export default function BoardNav ({title, countColumn, countTask} : BoardNavProps) {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    let word1 = ''
    let word2 = ''

    if (countColumn == 1) { word1 = 'колонке' } else { word1 = 'колонках' }

    switch (countTask) {
        case 1:
            word2 = 'задача'
            break
        case 2:
            word2 = 'задачи'
            break
        case 3:
            word2 = 'задачи'
            break
        case 4:
            word2 = 'задачи'
            break
        default:
            word2 = 'задач'
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <button onClick={() => navigate('/')} className={styles.backButton}><img className={styles.svg} src="/back.svg"/></button>
                <div className={styles.descriptionContainer}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.count}>{countTask > 0 && countTask > 0 ? `${countTask} ${word2} в ${countColumn} ${word1}` : ''}</p>
                </div>
            </div>

            <Button
                appearance={'big'}
                text={'Создать колонку'}
                onClick={() => dispatch(openColumnModal())}
            />


        </div>
    )
} 