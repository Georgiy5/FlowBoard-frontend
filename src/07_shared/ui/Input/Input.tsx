import { useId } from "react"
import type { InputProps } from "./type"
import styles from './Input.module.css'
import cn from 'classnames'


export default function Input (props : InputProps) {

    const {
        type,
        label, 
        placeholder, 
        onChange,
        value
    } = props
    
    const id = useId()

    return (
        <div className={cn(styles['container'])}>
            <label htmlFor={id} className={cn(styles['label'])}>{label}</label>


            <input 
                type={type}
                id={id}
                className={cn(styles['input'])}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>

    )
}