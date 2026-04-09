import type { NewOrder, Task } from "./type";

type PatchOrder = (payload: { id: number; tasks: NewOrder[] }) => Promise<unknown>

export const saveOrder = async (
    newList: Task[],
    id: number,
    patchOrder: PatchOrder
) => {
    const newOrder: NewOrder[] = newList.map((task, index) => ({
        id: task.id,
        order: index * 1000
    }));

    await patchOrder({
        id,
        tasks: newOrder
    });
};
