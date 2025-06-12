export type FileType = 'image' | 'excel' | 'pdf';

export interface File {
    id: string;
    name: string;
    type: FileType;
    image: string;
    parent?: string;
    size?: string;
}

export const files: File[] = [
    {
        id: '1',
        name: 'anh_diem',
        type: 'image',
        image: '/images/k5_hds02/Post1.jpg',
        parent: 'root'
    },
    {
        id: '2',
        name: 'anh_2',
        type: 'image',
        image: '/images/k5_hds02/Post2.jpg',
        parent: 'root'
    },
    {
        id: '3',
        name: 'anh_3',
        type: 'image',
        image: '/images/k5_hds02/Post3.jpg',
        parent: 'root'
    },
    {
        id: '4',
        name: 'anh_4',
        type: 'image',
        image: '/images/k5_hds02/Post4.jpg',
        parent: 'root'
    },
]

export const chooseFiles: File[] = [
    {
        id: "1",
        name: "Tạp chí thời trang động vật",
        size: "2.3MB",
        type: "pdf",
        image: "/images/k5_hds02/anh_1.jpg",
      },
      {
        id: "2",
        name: "Truyện Giáo sư Thạch tập 12",
        size: "6.8MB",
        type: "pdf",
        image: "/images/k5_hds02/anh_2.jpg",
      },
      {
        id: "3",
        name: "Kế hoạch học tập năm học 2025-2026",
        size: "302B",
        type: "excel",
        image: "/images/k5_hds02/anh_3.jpg",
      },
      {
        id: "4",
        name: "Nhatrang_he2025",
        size: "5MB",
        type: "image",
        image: "/images/k5_hds02/anh_4.jpg",
      },
      {
        id: "5",
        name: "Dalat_he2025",
        size: "8MB",
        type: "image",
        image: "/images/k5_hds02/anh_5.jpg",
      },
]