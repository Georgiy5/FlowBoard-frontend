
import styles from './Logo.module.css'
import cn from 'classnames'


export default function Logo ({classname} : {classname : string}) {




    return (
        <div className={cn(styles['container'])}>
            <div className={styles.logo}>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
            </div>
            <p className={cn(styles.title, styles[classname])}>FlowBoard</p>
        </div>
    )
}