import { BoardList } from "@/widgets/BoardList";
import { NavMenu } from "@/widgets/NavMenu";
import cn from 'classnames'
import styles from './Dashboard.module.css'
import { CreateBoardModal } from "@/features/CreateBoardModal";
import { useAppSelector } from "@/app/providers/store";

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
