import cn from 'classnames';
import styles from './NavMenu.module.css';

import NavList from "../../05_features/NavList/NavList";
import Logo from "../../07_shared/ui/Logo/Logo";


export default function NavMenu () {
    


    return (
        <div className={cn(styles['.navbar'])}>
            <Logo/>
            <NavList/>
        </div>

    )
}