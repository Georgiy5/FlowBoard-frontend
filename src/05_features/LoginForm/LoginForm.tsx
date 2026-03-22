import Button from "../../07_shared/ui/Button/Button";
import Input from "../../07_shared/ui/Input/Input";
import cn from 'classnames'
import styles from './LoginForm.module.css'
import { useEffect, useState, type ChangeEvent, type MouseEvent} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../06_entities/api/loginApi";


export default function LoginForm () {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, {data, isSuccess}] = useLoginMutation()

    const navigate = useNavigate()

    const auth = async (event: MouseEvent<HTMLButtonElement>) => {
        console.log(email)
        event.preventDefault()
        try {
            await login({email: email, password: password }).unwrap()
            setEmail('')
            setPassword('') 
        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(() => {
        if (data && isSuccess) {
            localStorage.setItem('token', data?.access_token)
            navigate('/')
        }
    }, [data, isSuccess])

    return (
            <form className={cn(styles['form'])} >
                <p className={styles.head}>Добро пожаловать</p>
                <p className={styles.text}>Введите свои данные, чтобы получить доступ к доскам</p>
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
                    placeholder={'Введите свой пароль'}
                    value={password}
                    onChange={(event : ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}               
                /> 
                <Button
                    appearance={'big'}
                    text={'Войти'}
                    onClick={auth}
                />
                <p className={styles.reg}>Ещё нет аккаунта? <Link className={styles.link} to={'/register'}>Зарегистрироваться</Link></p>
            </form>
    )
}