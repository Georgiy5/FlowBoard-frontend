
import { useAppSelector } from '../../../06_entities/hooks/hooks'
import styles from './Logo.module.css'
import cn from 'classnames'


export default function Logo ({classname} : {classname : string}) {


    const isOpened = useAppSelector(state => state.nav.isOpened)

    return (
        <div className={cn(styles['container'], {
            [styles.closedContainer] : !isOpened
        })}>
            <div className={styles.logo}>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
            </div>
            <p className={cn(styles.title, styles[classname], {
                [styles.closedText] : !isOpened
            })}>FlowBoard</p>
        </div>
    )
}