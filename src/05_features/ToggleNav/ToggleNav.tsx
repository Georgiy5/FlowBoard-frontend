import { useSelector } from 'react-redux'
import styles from './ToggleNav.module.css'
import type { ToggleNavProps } from './type'
import { useAppDispatch, useAppSelector } from '../../06_entities/hooks/hooks'
import { toggleNav } from '../../04_widgets/NavMenu/model/navSlice'

export default function ToggleNav () {


    const isOpened = useAppSelector(state => state.nav.isOpened)
    const dispatch = useAppDispatch()
    return (
        <div className={styles.container}>
            <button onClick={() => dispatch(toggleNav())} className={styles.button}>
                {isOpened ? '<' : '>'}
            </button>
        </div>

    )
}