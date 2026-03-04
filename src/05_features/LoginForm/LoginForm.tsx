import Button from "../../07_shared/ui/Button/Button";
import Input from "../../07_shared/ui/Input/Input";
import cn from 'classnames'
import styles from './LoginForm.module.css'
import { useEffect, useState, type ChangeEvent, type MouseEvent} from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../06_entities/store/loginApi";


export default function LoginForm () {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, {data}] = useLoginMutation()


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
        if (data) {
            localStorage.setItem('token', data?.access_token)
        }
    }, [data])

    return (
        <form className={cn(styles['form'])} >
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
                text={'Войти'}
                onClick={auth}
            />
            <p>Ещё нет аккаунта? <Link to={'/register'}>Зарегистрироваться</Link></p>
        </form>

    )
}