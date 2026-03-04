import cn from 'classnames';
import styles from './CloseButton.module.css';
import type { CloseButtonProps } from './type';


export default function CloseButton ({ classN, onClick } : CloseButtonProps) {
    


    return (
        <button onClick={onClick} className={cn(styles['button'], styles[classN])}>
            <img className={cn(styles['cross'])} src='cross.svg'/>
        </button>
    )
}