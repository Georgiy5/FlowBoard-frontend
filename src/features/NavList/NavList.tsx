
import cn from 'classnames';
import styles from './NavList.module.css';
import NavButton from '@/shared/ui/NavButton';
import { useLocation, useNavigate } from 'react-router-dom';



export default function NavList () {
    const navigate = useNavigate()
    const location = useLocation()
    const isBoards = location.pathname === '/'
    const isFavorites = location.pathname === '/favorites'

    return (
        <div className={cn(styles['list'])}>
            <NavButton
                isActive={isBoards}
                source={'board.svg'}
                text={'Доски'}
                onClick={() => navigate('/')}
            />
            <NavButton
                isActive={isFavorites}
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