
import styles from './Logo.module.css'
import cn from 'classnames'


export default function Logo () {




    return (
        <div className={cn(styles['container'])}>
            <img className={cn(styles['logo'])} src="logo.png" alt="Логотив" />
            <p>FlowBoard</p>
        </div>
    )
}