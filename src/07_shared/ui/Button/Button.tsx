import type { ButtonProps } from "./type";
import cn from 'classnames';
import styles from './Button.module.css';


export default function Button (props: ButtonProps) {
    
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