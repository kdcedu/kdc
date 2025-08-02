import { SharedUser } from "./user";

export type FileType = 'image' | 'excel' | 'pdf';


export interface File {
  id: string;
  name: string;
  type: FileType;
  image: string;
  parent?: string;
  size?: string;
  sharedWith?: SharedUser[]; // ✅ updated
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

export const adultFiles: File[] = [
  {
    id: '1',
    name: 'Ảnh kỷ yếu 2025',
    type: 'image',
    image: '/images/k8/ki_yeu_1.png',
    parent: 'root'
},
{
    id: '2',
    name: 'Ảnh kỷ yếu 2025',
    type: 'image',
    image: '/images/k8/ki_yeu_2.png',
    parent: 'root'
},
{
    id: '3',
    name: 'Ảnh kỷ yếu 2025',
    type: 'image',
    image: '/images/k8/ki_yeu_3.png',
    parent: 'root'
},
{
    id: '4',
    name: 'Ảnh kỷ yếu 2025',
    type: 'image',
    image: '/images/k8/ki_yeu_4.png',
    parent: 'root'
},
]

export const adultChooseFiles: File[] = [
  {
    id: '1',
    name: 'Truyện Giáo sư Thạch',
    type: 'pdf',
    image: '/images/k8/giao_su_thach.png',
    size: '2.3MB',
},
{
    id: '2',
    name: 'Truyện Hải trình vô tận',
    type: 'pdf',
    image: '/images/k8/hai_trinh_vo_tan.png',
    size: '6.8MB',
},
{
    id: '3',
    name: 'Ảnh kỷ yếu 2025',
    type: 'image',
    image: '/images/k8/ki_yeu_5.png',
    size: '302B',
},
{
    id: '4',
    name: 'Sách Ngữ văn',
    type: 'pdf',
    image: '/images/k8/ngu_van.png',
    size: '5MB',
},
{
    id: '5',
    name: 'Sách Toán',
    type: 'pdf',
    image: '/images/k8/toan.png',
    size: '8MB',
},
{
    id: '6',
    name: 'Thời khóa biểu',
    type: 'excel',
    image: '/images/k8/tkb.png',
    size: '8MB',
},
]