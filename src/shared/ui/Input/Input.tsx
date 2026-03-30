import { forwardRef, useId } from "react"
import type { InputProps } from "./type"
import styles from './Input.module.css'
import cn from 'classnames'

export default forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
    const {
        type,
        label, 
        placeholder, 
        onChange,
        value,
        ...restProps // 🔴 Остальные пропсы (например, disabled, autoFocus)
    } = props
    
    const id = useId()

    return (
        <div className={cn(styles['container'])}>
            {label && (
                <label htmlFor={id} className={cn(styles['label'])}>
                    {label}
                </label>
            )}

            <input 
                ref={ref} // 🔴 3. Пробрасываем ref в нативный input
                type={type}
                id={id}
                className={styles['input']}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...restProps} // 🔴 4. Пробрасываем остальные атрибуты
            />
        </div>
    )
})