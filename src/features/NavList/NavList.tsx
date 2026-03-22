
import cn from 'classnames';
import styles from './NavList.module.css';
import NavButton from '@/shared/ui/NavButton';



export default function NavList () {
    

    return (
        <div className={cn(styles['list'])}>
            <NavButton
                source={'board.svg'}
                text={'Доски'}
            />
            <NavButton
                source={'favorite.svg'}
                text={'Избранное'}
            />
            <NavButton
                source={'settings.svg'}
                text={'Настройки'}
            />
        </div>
    )
}