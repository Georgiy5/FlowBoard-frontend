import cn from 'classnames'
import styles from './BoardPage.module.css'
import { useGetBoardsByIdQuery } from '../../06_entities/store/boardsApi'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ColumnList from '../../04_widgets/ColumnList/ColumnList'
import Button from '../../07_shared/ui/Button/Button'
import CreateColumnModal from '../../05_features/CreateColumnModal/CreateColumn'
import { useAppDispatch } from '../../01_app/providers/store/hooks'
import { openColumnModal } from '../../06_entities/store/columnModalSlice'


export default function BoardPage () {

    const { id } = useParams();

    const param = Number(id)
    const dispatch = useAppDispatch()

    const {data , isLoading, isError} = useGetBoardsByIdQuery(param)

    useEffect(() => {
    console.log(data?.columns)
    }, [data])

    return (
        <>
            <p>{data?.title}</p>
            <Button
                appearance={'big'}
                text={'Создать колонку'}
                onClick={() => dispatch(openColumnModal())}
            />
            <ColumnList/>
            <CreateColumnModal boardId={Number(id)}/>
        </>

    )
}