import Button from "../../07_shared/ui/Button/Button";
import Input from "../../07_shared/ui/Input/Input";
import cn from 'classnames'
import styles from './RegisterForm.module.css'
import { useState, type ChangeEvent, type MouseEvent} from "react";
import { Link } from "react-router-dom";


export default function RegisterForm () {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    return (
        <form className={cn(styles['form'])} >
            <Input
                type={'text'}
                label={'Имя'}
                placeholder={'Иван'}
                value={name}
                onChange={(event : ChangeEvent<HTMLInputElement>) => setName(event.target.value)}               
            /> 
            <Input
                type={'email'}
                label={'Почта'}
                placeholder={'email@example.com'}
                value={email}
                onChange={(event : ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            />
            <Input
                type={'password'}
                label={'Пароль'}
                placeholder={'Пароль'}
                value={password}
                onChange={(event : ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}               
            /> 
            <Button
                text={'Зарегистрироваться'}
                onClick={(event: MouseEvent<HTMLButtonElement>) => {
                    console.log(email)
                    event.preventDefault()
                    setEmail('')
                    setPassword('')
                }}
            />
            <p>Уже есть аккаунт?<Link to={'/login'}>Войти</Link></p>
        </form>

    )
}