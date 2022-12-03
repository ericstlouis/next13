export interface todoType {
    collectionId: string,
    collectionName: string,
    completed: boolean,
    created: string,
    description: string,
    id: string,
    topic: string,
    updated: string,
}

export interface pocketbaseType {
    page: number,
    perPage: number,
    totalItems: number,
    totalPages: number,
    items: todoType[]
}

export type taskType = {
    task: todoType;
}

export type PageProps = {
    params: {
        id: string;
    }
}