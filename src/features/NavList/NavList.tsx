
import cn from 'classnames';
import styles from './NavList.module.css';
import NavButton from '@/shared/ui/NavButton';
import { useNavigate } from 'react-router-dom';



export default function NavList () {
    const navigate = useNavigate()

    const urlArr = window.location.href.split('/')

    return (
        <div className={cn(styles['list'])}>
            <NavButton
                isActive={urlArr[urlArr.length-1] === ''}
                source={'board.svg'}
                text={'Доски'}
                onClick={() => navigate('/')}
            />
            <NavButton
                isActive={urlArr[urlArr.length-1] === 'favorites'}
                source={'favorite.svg'}
                text={'Избранное'}
                onClick={() => navigate('/favorites')}
            />
            <NavButton
                isActive={false}
                source={'settings.svg'}
                text={'Настройки'}
            />
        </div>
    )
}