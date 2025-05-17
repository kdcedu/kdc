import { PrivacyType } from "@/components/post";

export interface PostType {
  time: string;
  content: string;
  image: string;
  privacy: PrivacyType
}

export const postContent: PostType[] = [
  {
    time: '15 tháng 5 lúc 10:00',
    content: 'Mot bai dang huu ich',
    image: '/images/grade.jpg',
    privacy: 'public'
  },
  {
    time: '15 tháng 4 lúc 09:00',
    content: 'Mot bai dang nham nhi',
    image: '/images/k2.jpg',
    privacy: 'public'
  },
  {
    time: '10 tháng 4 lúc 09:00',
    content: 'Khong biet dang cap gi',
    image: '/images/k5.jpg',
    privacy: 'public'
  },
  {
    time: '1 tháng 4 lúc 09:00',
    content: 'Qua luoi',
    image: '/images/k4.jpg',
    privacy: 'public'
  }
]