import { useAppSelector } from "@/app/providers/store";
import { NavMenu } from "@/widgets/NavMenu";
import { Outlet } from "react-router-dom";
import styles from './Layout.module.css'
import cn from 'classnames'


export default function Layout() {

    const isOpened = useAppSelector(state => state.nav.isOpened)
    
    return (
        <div className={cn(styles['layout'], {
            [styles.closed] : !isOpened
        })}>
            <NavMenu/>
            <Outlet/>
        </div>

    )
}

