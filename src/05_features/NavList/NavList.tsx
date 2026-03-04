
import cn from 'classnames';
import styles from './NavList.module.css';
import NavButton from '../../07_shared/ui/NavButton/NavButton';



export default function NavList () {
    

    return (
        <div className={cn(styles['list'])}>
            <NavButton
                text={'Dashboard'}
            />
            <NavButton
                text={'My Boards'}
            />
            <NavButton
                text={'Settings'}
            />
        </div>
    )
}