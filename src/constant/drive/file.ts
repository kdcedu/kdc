type FileType = 'image' | 'doc' | 'excel' | 'pdf' | 'video' | 'audio'

export interface File {
    id: number;
    name: string;
    type: FileType;
    image: string;
}

export const files: File[] = [
    {
        id: 1,
        name: 'anh_diem.jpg',
        type: 'image',
        image: '/images/grade.jpg'
    },
    {
        id: 2,
        name: 'anh_2.jpg',
        type: 'doc',
        image: '/images/grade.jpg'
    },
    {
        id: 3,
        name: 'anh_3.jpg',
        type: 'excel',
        image: '/images/grade.jpg'
    },
    {
        id: 4,
        name: 'anh_4.jpg',
        type: 'pdf',
        image: '/images/grade.jpg'
    },
    {
        id: 5,
        name: 'anh_5.jpg',
        type: 'video',
        image: '/images/grade.jpg'
    },
    {
        id: 6,
        name: 'anh_6.jpg',
        type: 'audio',
        image: '/images/grade.jpg'
    }
]