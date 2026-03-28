import { useGetFavoritesQuery } from '@/entities/api/favorites.endpoints'
import { BoardList } from '@/widgets/BoardList'

export default function Favorite() {

    const { data, isLoading, isError } = useGetFavoritesQuery()

    return (
        <div>
            <BoardList
                favorite={true}
                data={data}
                isLoading={isLoading}
                isError={isError}
            />
        </div>
    )
}
