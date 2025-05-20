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
    content: 'Hôm nay là một ngày thật vui! Sáng dậy mình được mẹ làm cho món trứng chiên ngon ơi là ngon.',
    image: '/images/Post1.jpg',
    privacy: 'public'
  },
  {
    time: '15 tháng 4 lúc 09:00',
    content: 'Nhà tớ mới có thêm một thành viên mới, đó là chú cún tên Bông! Bông bé xíu xiu à, lông trắng như bông gòn vậy đó. Mỗi lần tớ đi học về, Bông lại vẫy đuôi mừng tíu tít. Tớ thích chơi đùa với Bông lắm, bạn ấy làm tớ vui cả ngày! ❤️',
    image: '/images/Post2.jpg',
    privacy: 'public'
  },
  {
    time: '10 tháng 4 lúc 09:00',
    content: 'Cuối tuần là thời gian để mình xả hơi nè! Hôm qua ba mẹ cho mình đi công viên chơi. Mình được chạy nhảy thỏa thích, còn ăn kem nữa chứ! Tối về nhà, mình và em trai cùng nhau lắp ráp mô hình rô bốt. Vui ơi là vui! Mong chờ cuối tuần sau quá đi! 😄',
    image: '/images/Post3.jpg',
    privacy: 'public'
  },
  {
    time: '1 tháng 4 lúc 09:00',
    content: 'Hôm nay cô trả bài kiểm tra Toán. Tớ làm bài chưa tốt lắm nên bị điểm hơi thấp. Tớ buồn quá trời luôn. Về nhà tớ chỉ muốn khóc thôi.',
    image: '/images/Post4.jpg',
    privacy: 'public'
  }
]