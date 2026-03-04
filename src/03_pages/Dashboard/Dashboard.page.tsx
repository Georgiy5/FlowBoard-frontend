import BoardList from "../../04_widgets/BoardList/BoardList";
import NavMenu from "../../04_widgets/NavMenu/NavMenu";
import cn from 'classnames'
import styles from './Dashboard.module.css'
import CreateBoardModal from "../../05_features/CreateBoardModal/CreateBoardModal";

export default function DashboardPage() {
  return (
    <div className={cn(styles['dashboard'])}>
        <NavMenu/>
        <BoardList/>
        <CreateBoardModal/>
    </div>
  );
}
