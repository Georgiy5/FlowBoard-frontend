import BoardList from "../../04_widgets/BoardList/BoardList";
import NavMenu from "../../04_widgets/NavMenu/NavMenu";
import cn from 'classnames'
import styles from './Dashboard.module.css'
import CreateBoardModal from "../../05_features/CreateBoardModal/CreateBoardModal";
import { useAppSelector } from "../../01_app/providers/store/hooks";

export default function DashboardPage() {

  const isOpened = useAppSelector(state => state.nav.isOpened)

  return (
    <div className={cn(styles['dashboard'], {
      [styles.closed] : !isOpened
    })}>
        <NavMenu/>
        <BoardList/>
        <CreateBoardModal/>
    </div>
  );
}
