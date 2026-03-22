import cn from 'classnames';
import styles from './NavButton.module.css';
import type { NavButtonProps } from './type';
import { useAppSelector } from '../../../06_entities/hooks/hooks';


export default function NavButton (props: NavButtonProps) {
    
    const {
        text,
        onClick,
        source
    } = props

    const isOpened = useAppSelector(state => state.nav.isOpened)
    return (
            <button 
                onClick={onClick} 
                className={cn(styles['button'], {
                    [styles.closedButton] : !isOpened
                })}
            >
                <img className={styles.svg} src={source}/>
                <p className={cn({
                    [styles.closedText] : !isOpened
                })}>{text}</p>
            </button>

        
    )
}