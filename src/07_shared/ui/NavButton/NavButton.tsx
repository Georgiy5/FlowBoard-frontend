import cn from 'classnames';
import styles from './NavButton.module.css';
import type { NavButtonProps } from './type';


export default function NavButton (props: NavButtonProps) {
    
    const {
        text,
        onClick
    } = props

    return (
        <button 
            onClick={onClick} 
            className={cn(styles['button'])}
        >{text}
        </button>
    )
}