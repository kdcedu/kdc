export interface ChatContent {
  id: number;
  name: string;
  content: string;
  answer?: boolean;
  img?: string;
  avatar?: string;
  link?: string;
}

export const chatContent: ChatContent[] = [
  {
    id: 1,
    name: "Bình",
    content: "Trời ơi Chi ơi, điểm Toán của mày thấp tệ luôn á! Sao lại làm dở vậy?",
    answer: true,
    img: "/images/grade.jpg",
    avatar: "/avatars/boy_1.svg"
  },
  {
    id: 2,
    name: "Chi",
    content: "Tớ thấy bài này khó quá, với tớ làm bài chưa kịp giờ. Lần sau tớ sẽ cố gắng hơn.",
    answer: false,
    avatar: "/avatars/girl_1.svg"
  },
  {
    id: 3,
    name: "An",
    content: "Này Bình, sao lại nói Chi như vậy? Ai cũng có lúc làm bài chưa tốt mà.",
    answer: false,
    avatar: "/avatars/boy_2.svg"
  },
  {
    id: 4,
    name: "Bình",
    content: "Kệ tớ! Nhưng điểm thấp vậy là quá dở rồi còn gì. Phải lo mà học đi chứ!",
    answer: true,
    avatar: "/avatars/boy_1.svg"
  },
  {
    id: 5,
    name: "Minh",
    content: "Haha đúng đó Bình! Chi học dở thiệt mà. Tớ còn làm nhanh hơn Chi nữa. Chắc Chi ngốc thật rồi.",
    answer: true,
    avatar: "/avatars/boy_6.svg"
  },
  {
    id: 6,
    name: "An",
    content: "Nói vậy không giúp Chi đâu Bình, Minh ơi. Chỉ làm Chi buồn hơn thôi. Chi đã nói sẽ cố gắng rồi mà. Mình nên động viên bạn chứ.",
    answer: false,
    avatar: "/avatars/boy_2.svg"
  },
];

export const filterUsers = [
   {
    id: 1,
    name: "Bình",
    avatar: "/avatars/boy_1.svg",
    answer: true
   },
   {
    id: 2,
    name: "Chi",
    avatar: "/avatars/girl_1.svg",
    answer: false
   },
   {
    id: 3,
    name: "An",
    avatar: "/avatars/boy_2.svg",
    answer: false
   },
   {
    id: 4,
    name: "Minh",
    avatar: "/avatars/boy_6.svg",
    answer: true
   },
]

export const clickChatContent: ChatContent[] = [
  {
    id: 1,
    name: "Bình",
    content: "Trời ơi Chi ơi, điểm Toán của mày thấp tệ luôn á! Sao lại làm dở vậy?",
    avatar: "/avatars/boy_1.svg",
    link: "https://www.virus.com/profile.php?id=10",
    img: "/images/grade.jpg"
  }
]
