import cn from 'classnames';
import styles from './NavMenu.module.css';

import NavList from "../../05_features/NavList/NavList";
import Logo from "../../07_shared/ui/Logo/Logo";
import ToggleNav from '../../05_features/ToggleNav/ToggleNav';



export default function NavMenu () {



    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Logo
                    classname={'black'}
                />
            </div>
            <NavList/>
            <ToggleNav/>
        </div>

    )
}