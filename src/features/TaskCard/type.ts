export interface TaskCardProps {
    title: string,
    description: string,
    onClick: (event: React.MouseEvent) => void,
    id: number,
    dataId: number,
    descrAttr: string,
    titleAttr: string,
    columnId: number
}