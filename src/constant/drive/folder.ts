export interface Folder {
    id: number;
    name: string;
    parent?: string;
}

export const folders: Folder[] = [
    {
        id: 1,
        name: 'Học tập',
        parent: 'root'
    },
    {
        id: 2,
        name: 'Giải trí',
        parent: 'root'
    },
    {
        id: 3,
        name: 'Hình ảnh',
        parent: 'root'
    },
    {
        id: 4,
        name: 'Nhạc',
        parent: 'root'
    },
]
    