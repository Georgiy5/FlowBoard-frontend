import cn from 'classnames';
import styles from './NavMenu.module.css';

import { NavList } from "@/features/NavList";
import { Logo } from "@/shared/ui/Logo";
import { ToggleNav } from "@/features/ToggleNav";



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