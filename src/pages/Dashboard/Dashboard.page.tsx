import { BoardList } from "@/widgets/BoardList";
import { CreateBoardModal } from "@/features/CreateBoardModal";

export default function DashboardPage() {

  return (
    <>
        <BoardList/>
        <CreateBoardModal/>
    </>
  );
}
