import { PrivacyType } from "@/components/post";

export interface PostType {
  time: string;
  content: string;
  image: string;
  privacy: PrivacyType;
  blockList: string[];
  name: string;
  avatar: string;
  isTrue?: boolean;
  trueResult?: string;
  falseResult?: string;
  trueContent?: string;
  falseContent?: string;
}

export const postContent: PostType[] = [
  {
    time: '15 tháng 5 lúc 10:00',
    content: 'Hôm nay là một ngày thật vui! Sáng dậy mình được mẹ làm cho món trứng chiên ngon ơi là ngon.',
    image: '/images/Post1.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Nguyễn Bin',
    avatar: '/icons/Bin.svg'
  },
  {
    time: '15 tháng 4 lúc 09:00',
    content: 'Nhà tớ mới có thêm một thành viên mới, đó là chú cún tên Bông! Bông bé xíu xiu à, lông trắng như bông gòn vậy đó. Mỗi lần tớ đi học về, Bông lại vẫy đuôi mừng tíu tít. Tớ thích chơi đùa với Bông lắm, bạn ấy làm tớ vui cả ngày! ❤️',
    image: '/images/Post2.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Nguyễn Bin',
    avatar: '/icons/Bin.svg'
  },
  {
    time: '10 tháng 4 lúc 09:00',
    content: 'Cuối tuần là thời gian để mình xả hơi nè! Hôm qua ba mẹ cho mình đi công viên chơi. Mình được chạy nhảy thỏa thích, còn ăn kem nữa chứ! Tối về nhà, mình và em trai cùng nhau lắp ráp mô hình rô bốt. Vui ơi là vui! Mong chờ cuối tuần sau quá đi! 😄',
    image: '/images/Post3.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Nguyễn Bin',
    avatar: '/icons/Bin.svg'
  },
  {
    time: '1 tháng 4 lúc 09:00',
    content: 'Hôm nay cô trả bài kiểm tra Toán. Tớ làm bài chưa tốt lắm nên bị điểm hơi thấp. Tớ buồn quá trời luôn. Về nhà tớ chỉ muốn khóc thôi.',
    image: '/images/Post4.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Nguyễn Bin',
    avatar: '/icons/Bin.svg'
  }
]

export const likeSharePostContent: PostType[] = [
  {
    time: '15 tháng 5 lúc 10:00',
    content: 'Hôm nay là một ngày thật vui! Sáng dậy mình được mẹ làm cho món trứng chiên ngon ơi là ngon.',
    image: '/images/Post1.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Nguyễn Bin',
    avatar: '/icons/Bin.svg',
    isTrue: true,
    trueResult: '/images/Post1_true.png',
    falseResult: '/images/Post1_false.png',
    trueContent: 'Hôm nay là một ngày thật vui! Chọn đúng',
    falseContent: 'Hôm nay là một ngày thật vui! Chọn sai',
  },
  {
    time: '15 tháng 4 lúc 09:00',
    content: 'Nhà tớ mới có thêm một thành viên mới, đó là chú cún tên Bông! Bông bé xíu xiu à, lông trắng như bông gòn vậy đó. Mỗi lần tớ đi học về, Bông lại vẫy đuôi mừng tíu tít. Tớ thích chơi đùa với Bông lắm, bạn ấy làm tớ vui cả ngày! ❤️',
    image: '/images/Post2.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Nguyễn Bin',
    avatar: '/icons/Bin.svg',
    isTrue: false,
    trueResult: '/images/Post2_true.png',
    falseResult: '/images/Post2_false.png',
    trueContent: 'Nhà tớ mới có thêm một thành viên mới, đó là chú cún tên Bông! Chọn đúng',
    falseContent: 'Nhà tớ mới có thêm một thành viên mới, đó là chú cún tên Bông! Chọn sai',
  },
  {
    time: '10 tháng 4 lúc 09:00',
    content: 'Cuối tuần là thời gian để mình xả hơi nè! Hôm qua ba mẹ cho mình đi công viên chơi. Mình được chạy nhảy thỏa thích, còn ăn kem nữa chứ! Tối về nhà, mình và em trai cùng nhau lắp ráp mô hình rô bốt. Vui ơi là vui! Mong chờ cuối tuần sau quá đi! 😄',
    image: '/images/Post3.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Nguyễn Bin',
    avatar: '/icons/Bin.svg',
    isTrue: true,
    trueResult: '/images/Post3_true.png',
    falseResult: '/images/Post3_false.png',
    trueContent: 'Cuối tuần là thời gian để mình xả hơi nè! Chọn đúng',
    falseContent: 'Cuối tuần là thời gian để mình xả hơi nè! Chọn sai',
  },
  {
    time: '1 tháng 4 lúc 09:00',
    content: 'Hôm nay cô trả bài kiểm tra Toán. Tớ làm bài chưa tốt lắm nên bị điểm hơi thấp. Tớ buồn quá trời luôn. Về nhà tớ chỉ muốn khóc thôi.',
    image: '/images/Post4.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Nguyễn Bin',
    avatar: '/icons/Bin.svg',
    isTrue: false,
    trueResult: '/images/Post4_true.png',
    falseResult: '/images/Post4_false.png',
    trueContent: 'Hôm nay cô trả bài kiểm tra Toán. Chọn đúng',
    falseContent: 'Hôm nay cô trả bài kiểm tra Toán. Chọn sai',
  }
]

interface PrivacyListType {
  title: string
  description: string
  value: PrivacyType
}

export const defaultPrivacyList: PrivacyListType[] = [
  {
    title: "Công khai",
    description: "Bất kỳ ai ở trên hoặc ngoài Facebook",
    value: "public",
  },
  {
    title: "Bạn bè",
    description: "Bạn bè của bạn trên Facebook",
    value: "friend",
  },
  {
    title: "Bạn bè ngoại trừ...",
    description: "Bạn bè của bạn ngoài trừ người bạn này",
    value: "custom",
  },
  {
    title: "Chỉ mình tôi",
    description: "Chỉ có bạn mới xem được nội dung này",
    value: "only",
  },
];