export interface ChatContent {
  id: number;
  name: string;
  content: React.ReactNode[];
  answer?: boolean;
  img?: string;
  avatar?: string;
  link?: string;
  trueResult?: string;
  falseResult?: string;
  trueContent?: string;
  falseContent?: string;
}

export const chatContent: ChatContent[] = [
  {
    id: 1,
    name: "Bình",
    content: ["Trời ơi Chi ơi, điểm Toán của mày thấp tệ luôn á! Sao lại làm dở vậy?"],
    answer: true,
    img: "/images/grade.jpg",
    avatar: "/avatars/boy_1.svg"
  },
  {
    id: 2,
    name: "Chi",
    content: ["Tớ thấy bài này khó quá, với tớ làm bài chưa kịp giờ. Lần sau tớ sẽ cố gắng hơn."],
    answer: false,
    avatar: "/avatars/girl_1.svg"
  },
  {
    id: 3,
    name: "An",
    content: ["Này Bình, sao lại nói Chi như vậy? Ai cũng có lúc làm bài chưa tốt mà."],
    answer: false,
    avatar: "/avatars/boy_2.svg"
  },
  {
    id: 4,
    name: "Bình",
    content: ["Kệ tớ! Nhưng điểm thấp vậy là quá dở rồi còn gì. Phải lo mà học đi chứ!"],
    answer: true,
    avatar: "/avatars/boy_1.svg"
  },
  {
    id: 5,
    name: "Minh",
    content: ["Haha đúng đó Bình! Chi học dở thiệt mà. Tớ còn làm nhanh hơn Chi nữa. Chắc Chi ngốc thật rồi."],
    answer: true,
    avatar: "/avatars/boy_6.svg"
  },
  {
    id: 6,
    name: "An",
    content: ["Nói vậy không giúp Chi đâu Bình, Minh ơi. Chỉ làm Chi buồn hơn thôi. Chi đã nói sẽ cố gắng rồi mà. Mình nên động viên bạn chứ."],
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

export const clickChatContent = (onClick: (value: boolean) => void) : ChatContent[][] => [
  [
    {
      id: 1,
      name: "Minh Anh",
      content: ["Bạn khỏe không? Lâu quá không nói chuyện nhỉ.", <span key={1}>Có thể bạn không nhớ mình đâu, mình học lớp 5/3 kế bên. Mà thôi không quan trọng. Này, bạn xem cái này chua? Hôm qua có đứa lớp bạn bị quay lén nè, thấy bảo giống bạn lém á! 😱 Xem ngay ở đây nè: <span className="text-blue-400 underline cursor-pointer" onClick={() => onClick(false)}>bit.ly/clip-hot-bat-ngo-xyz</span></span>, "Trời ơi xem đi ko người ta xóa hết bi h! Nghe bảo đang share chóng mặt luôn đó. Bạn xem có phải bạn ko để còn biết đường xử lý??"],
      avatar: "/avatars/girl_1.svg",
      answer: false,
      trueResult: '/images/TH135-B.jpg',
      falseResult: '/images/TH1-A.jpg',
      trueContent: 'Bạn An Toàn',
      falseContent: 'Máy tính hoặc điện thoại của bạn bị cài phần mềm gián điệp, bị đánh cắp ảnh cá nhân và thông tin riêng tư.'
    }
  ],
  [
    {
      id: 1,
      name: "Cô Lan - Chủ nhiệm lớp 5/3",
      content: [<span key={2}>Chào các em, cô Lan đây! Cô gửi link bài tập Toán hôm nay cho lớp mình nhé: <span className="text-blue-400 underline cursor-pointer" onClick={() => onClick(true)}>https://truongtieuhocabc.edu.vn/luyen-tap-toan</span> Các em hoàn thành trước thứ Sáu nhé!
</span>],
      avatar: "/avatars/girl_3.svg",
      answer: true,
      trueResult: '/images/TH2-A.jpg',
      falseResult: '/images/TH2-B.jpg',
      trueContent: 'Link dẫn đến trang web chính thức của trường học. Trang web cho phép tải bài tập Toán về làm. Không có yêu cầu thông tin cá nhân.',
      falseContent: 'Đến hạn nộp, bạn không có bài tập. Trong giờ học, cô Lan đã nhắc nhở bạn trước lớp.'
    }
  ],
  [
    {
      id: 1,
      name: "Cún Gaming TV",
      content: ["Chào fen cứng của Cún Gaming TV! Anh là Cún đây! Thấy em cũng hay chơi Roblux.", "Để cảm ơn các fen đã ủng hộ, hôm nay anh có sự kiện đặc biệt nè: Tặng MIỄN PHÍ 1000 Rubox cho 50 bạn fen may mắn nhất! Anh là Cún Gaming TV thật nè ✔️. Em có muốn nhận không?", <span key={3}>Em chỉ cần bấm ngay vào đường link sự kiện đặc biệt này của anh để đăng ký nhận Rubox thôi. Nhớ nhanh tay nha, chỉ có 50 suất thôi đó! Link nè: <span className="text-blue-400 underline cursor-pointer" onClick={() => onClick(false)}>edent-rubox-cungamig.site</span> Bấm vào nhận quà liền nha fan ơi! 🎁</span>],
      avatar: "/avatars/animal_6.svg",
      answer: false,
      trueResult: '/images/TH135-B.jpg',
      falseResult: '/images/TH3-A.jpg',
      trueContent: 'Bạn An Toàn',
      falseContent: 'Bạn bị lừa nhập tài khoản Roblux và bị mất tài khoản game, kèm theo nguy cơ mất các vật phẩm, thông tin cá nhân trong trò chơi.'
    }
  ],
  [
    {
      id: 1,
      name: "Chị Hai",
      content: ["Út ơi, chị thấy có bài học tiếng Anh lớp 5 rất hay, phù hợp với em nè.", <span key={4}>Đây là link từ trang chính thức của Bộ Giáo dục, em vào ôn tập nhé: <span className="text-blue-400 underline cursor-pointer" onClick={() => onClick(true)}>https://hoclieu.moet.edu.vn/bai-tap-tieng-anh-lop-5</span></span>, "Cần chị hướng dẫn thêm thì nhắn lại nha! Thương út!"],
      avatar: "/avatars/girl_6.svg",
      answer: true,
      trueResult: '/images/TH4-A.jpg',
      falseResult: '/images/TH4-B.jpg',
      trueContent: 'Bạn đã vào được trang web chính thức của Bộ Giáo dục Việt Nam (hoclieu.moet.edu.vn). Bạn tải được bài tập để ôn luyện.',
      falseContent: 'Bạn đã bỏ lỡ cơ hội tiếp cận bài tập hay, dễ hiểu. Vì vậy mà bài thi tiếng Anh vừa rồi gặp khó khăn hơn.'
    }
  ],
  [
    {
      id: 1,
      name: "Khoa",
      content: ["Đang làm gì đó bro? Rảnh không?", <span key={5}>À, chuyện là tớ đang tham gia cái cuộc thi ảnh online của trường ấy mà. Giải thưởng to lắm! Phiền bro vào link này like với bình chọn cho ảnh của tớ một phiếu được không? Số báo danh của tớ là 312 nè. Cần nhiều lượt bình chọn lắm! 🙏🙏🙏 Link đây nha: <span className="text-blue-400 underline cursor-pointer" onClick={() => onClick(false)}>binhchonanhdep-truongtieuhoc.xyz/thamgia?id=312</span></span>, "Vote nhanh giúp tớ nha, sắp hết hạn bình chọn rồi đó! Cảm ơn bro nhiều!"],
      avatar: "/avatars/boy_5.svg",
      answer: false,
      trueResult: '/images/TH135-B.jpg',
      falseResult: '/images/TH5-A.jpg',
      trueContent: 'Bạn An Toàn',
      falseContent: 'Bạn bị lừa mất thông tin cá nhân và dữ liệu trên máy tính, trong đó có tài khoản ngân hàng của bố mẹ. Hacker đã lấy mất tiền trong tài khoản đó.'
    }
  ]
]
