import cn from 'classnames';
import styles from './NavMenu.module.css';

import NavList from "../../05_features/NavList/NavList";
import Logo from "../../07_shared/ui/Logo/Logo";
import ToggleNav from '../../05_features/ToggleNav/ToggleNav';
import { useState } from 'react';
import { useAppSelector } from '../../01_app/providers/store/hooks';


export default function NavMenu () {

    const isOpened = useAppSelector(state => state.nav.isOpened)

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