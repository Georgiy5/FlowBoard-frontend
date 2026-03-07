import Button from "../../07_shared/ui/Button/Button";
import Input from "../../07_shared/ui/Input/Input";
import cn from 'classnames'
import styles from './RegisterForm.module.css'
import { useEffect, useState, type ChangeEvent, type MouseEvent} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../06_entities/store/loginApi";


export default function RegisterForm () {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const [register, {data, isSuccess}] = useRegisterMutation()

    const authRegister = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        await register({
            name,
            email,
            password
        })
        setEmail('')
        setPassword('')
        setName('')
    }

    useEffect(() => {
        if (data) {
            localStorage.setItem('token', data?.access_token)
            navigate('/')
        }
    }, [data])

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
                appearance={'big'}
                text={'Зарегистрироваться'}
                onClick={authRegister}
            />
            <p>Уже есть аккаунт? <Link to={'/login'}>Войти</Link></p>
        </form>

    )
}