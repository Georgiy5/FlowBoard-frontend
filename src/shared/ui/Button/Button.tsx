import type { ButtonProps } from "./type";
import cn from 'classnames';
import styles from './Button.module.css';


export default function Button (props: ButtonProps) {
    const {
        text,
        appearance,
        ...restProps
    } = props

    return (
        <button
            {...restProps}
            className={cn(styles['button'], {
                [styles['big']] : appearance === 'big',
                [styles['small']] : appearance === 'small',
                [styles['deleteTask']] : appearance === 'deleteTask',
            })}
        >{text}
        </button>
    )
}