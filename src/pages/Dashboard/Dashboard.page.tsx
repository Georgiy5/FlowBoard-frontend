import { BoardList } from "@/widgets/BoardList";
import { CreateBoardModal } from "@/features/CreateBoardModal";
import { useGetBoardsQuery } from "@/entities/api";

export default function DashboardPage() {

    const { data, isLoading, isError } = useGetBoardsQuery()

    return (
      <>
          <BoardList
            favorite={false}
            data={data}
            isLoading={isLoading}
            isError={isError}
          />
          <CreateBoardModal/>
      </>
    );
}
