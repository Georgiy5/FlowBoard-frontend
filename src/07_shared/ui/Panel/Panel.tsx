import Logo from '../Logo/Logo'
import styles from './Panel.module.css'
import cn from 'classnames'

export default function Panel () {


    return (
        <div className={styles.panel}>
            <Logo classname={'white'}/>
            <p className={styles.description}>Организуйте свои проекты, управляйте задачами и сотрудничайте со своей командой, используя мощные доски Kanban.</p>
            <div className={styles.figures}>
                <div className={cn(styles.figure1, styles.figure)}></div>
                <div className={cn(styles.figure2, styles.figure)}></div>
                <div className={cn(styles.figure3, styles.figure)}></div>
                <div className={cn(styles.figure4, styles.figure)}></div>
                <div className={cn(styles.figure5, styles.figure)}></div>
                <div className={cn(styles.figure6, styles.figure)}></div>
            </div>
        </div>
    )
}