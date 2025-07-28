import { PrivacyType } from "@/components/post";

export interface PostType {
  time: string;
  content: string;
  image?: string;
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
    content: 'Hôm nay mình được cô giáo khen vì đã hoàn thành bức tranh về chủ đề bảo vệ môi trường rất đẹp! Mình vui ơi là vui! Mình sẽ cố gắng vẽ thêm nhiều tranh đẹp hơn nữa. Cả nhà ơi, cùng xem tranh của mình nè!',
    image: '/images/k4_hds03/post_1.png',
    privacy: 'public',
    blockList: [],
    name: 'An Nhiên',
    avatar: '/avatars/girl_4.svg',
    isTrue: true,
    trueResult: '/images/k4_hds03/true_result.png',
    trueContent: 'Việc này như mình đang tặng các bạn những lời khen và động viên. Điều đó làm các bạn vui hơn, muốn làm thêm nhiều việc tốt và chia sẻ điều hay. Những tin tốt này cũng được nhiều người biết đến, giúp mạng xã hội vui hơn, an toàn hơn và mọi người học được điều tốt từ nhau.',
  },
  {
    time: '15 tháng 4 lúc 09:00',
    content: 'Cuối tuần mình đã phụ mẹ dọn dẹp nhà cửa và tưới cây. Tuy hơi mệt một chút nhưng nhìn nhà cửa sạch sẽ, cây cối xanh tươi, mình thấy rất vui và tự hào! Bố mẹ còn khen mình lớn rồi, biết giúp đỡ gia đình nữa đó!',
    image: '/images/k4_hds03/post_2.png',
    privacy: 'public',
    blockList: [],
    name: 'Mạnh Hùng',
    avatar: '/avatars/boy_1.svg',
    isTrue: true,
    trueResult: '/images/k4_hds03/true_result.png',
    trueContent: 'Việc này như mình đang tặng các bạn những lời khen và động viên. Điều đó làm các bạn vui hơn, muốn làm thêm nhiều việc tốt và chia sẻ điều hay. Những tin tốt này cũng được nhiều người biết đến, giúp mạng xã hội vui hơn, an toàn hơn và mọi người học được điều tốt từ nhau.',
  },
  {
    time: '10 tháng 4 lúc 09:00',
    content: 'Trời ơi, bạn Hoàng lớp mình hôm nay đi học mang cái cặp sách cũ rích, lại còn bị rách một chỗ nữa chứ! Nhìn quê ơi là quê! Hahaha!',
    image: '/images/k4_hds03/post_3.png',
    privacy: 'public',
    blockList: [],
    name: 'Tuấn Khải',
    avatar: '/avatars/boy_2.svg',
    isTrue: false,
    falseResult: '/images/k4_hds03/false_result_post_3.png',
    falseContent: 'Việc này có thể làm bạn Hoàng rất buồn và tổn thương vì bị trêu chọc. "Like" và "Share" giống như mình đang đồng ý với việc làm xấu đó, khiến mạng xã hội không còn vui vẻ. Nếu nhiều người làm theo, bạn Tuấn Khải sẽ không biết mình sai và có thể làm tổn thương thêm bạn khác.',
  },
  {
    time: '1 tháng 4 lúc 09:00',
    content: 'Sắp tới trường mình tổ chức hội thao rồi! Mình đã đăng ký thi chạy và nhảy dây. Mấy ngày nay mình đều chăm chỉ tập luyện. Háo hức quá đi thôi! Các bạn hãy luyện tập thật tốt nhé!',
    image: '/images/k4_hds03/post_4.png',
    privacy: 'public',
    blockList: [],
    name: 'Linh Chi',
    avatar: '/avatars/girl_5.svg',
    isTrue: true,
    trueResult: '/images/k4_hds03/true_result.png',
    trueContent: 'Việc này như mình đang tặng các bạn những lời khen và động viên. Điều đó làm các bạn vui hơn, muốn làm thêm nhiều việc tốt và chia sẻ điều hay. Những tin tốt này cũng được nhiều người biết đến, giúp mạng xã hội vui hơn, an toàn hơn và mọi người học được điều tốt từ nhau.',
  }
  ,
  {
    time: '28 tháng 3 lúc 07:00',
    content: 'Nghe nói bạn My lớp bên cạnh gian lận trong giờ kiểm tra toán hôm qua nên mới được điểm cao đó. Thảo nào bình thường học dốt thế mà tự nhiên lại được 10. Chắc chắn là quay cóp rồi!',
    privacy: 'public',
    blockList: [],
    name: 'Gia Bảo',
    avatar: '/avatars/boy_3.svg',
    isTrue: false,
    falseResult: '/images/k4_hds03/false_result_post_5.png',
    falseContent: 'Việc này làm bạn My bị hiểu lầm không tốt. Tin bạn Gia Bảo nói chưa chắc đúng, có thể làm bạn My bị bạn bè xa lánh, thầy cô hiểu sai. Nếu mình "Like" và "Share", mình đang giúp lan truyền tin đồn không đúng, làm bạn My buồn. Như vậy là mình chưa cẩn thận khi chia sẻ tin trên mạng.',
  }
]

export const adultLikeSharePostContent: PostType[] = [
  {
    time: '15 tháng 5 lúc 10:00',
    content: 'Cả nhà ơi! Hôm nay mình tham gia buổi tình nguyện dọn dẹp công viên gần nhà. Tuy hơi mệt nhưng nhìn công viên sạch đẹp, ai cũng vui vẻ, mình thấy công sức bỏ ra thật đáng giá! Cùng nhau chung tay bảo vệ môi trường nhé!',
    image: '/images/k6_hds01/K6HDS01_Post1.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Thu Thảo',
    avatar: '/avatars/Avatar_ThuThao.jpg',
    isTrue: true,
    trueResult: '/images/k6_hds01/KQTichcuc.jpg',
    trueContent: 'Chúc mừng bạn! Hành động "Like" và "Share" của bạn đã lan tỏa những thông điệp tích cực, khuyến khích bạn bè cùng làm việc tốt và xây dựng một cộng đồng mạng văn minh, nhân ái. Bạn đã góp phần tạo nên một không gian trực tuyến an toàn và bổ ích cho mọi người!',
  },
  {
    time: '12 tháng 5 lúc 10:00',
    content: 'Vừa hoàn thành dự án Khoa học Tự nhiên về biến đổi khí hậu! Cả nhóm đã thức đêm mấy hôm liền để nghiên cứu và làm mô hình. Thật tự hào vì thành quả của cả đội! Cố gắng hết sức rồi, giờ chỉ chờ kết quả thôi!',
    image: '/images/k6_hds01/K6HDS01_Post2.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Minh Khôi',
    avatar: '/avatars/Avatar_MinhKhoi.jpg',
    isTrue: true,
    trueResult: '/images/k6_hds01/KQTichcuc.jpg',
    trueContent: 'Chúc mừng bạn! Hành động "Like" và "Share" của bạn đã lan tỏa những thông điệp tích cực, khuyến khích bạn bè cùng làm việc tốt và xây dựng một cộng đồng mạng văn minh, nhân ái. Bạn đã góp phần tạo nên một không gian trực tuyến an toàn và bổ ích cho mọi người!',
  },
  {
    time: '10 tháng 5 lúc 10:00',
    content: 'Trời ơi, cái áo thể dục của bạn Nam lớp mình cũ quá, nhìn rách cả một lỗ to tướng ở khuỷu tay! Kiểu này chắc mặc đi học cũng ngại lắm đây, hahaha!',
    image: '/images/k6_hds01/K6HDS01_Post3.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Bảo An',
    avatar: '/avatars/Avatar_BaoAn.jpg',
    isTrue: false,
    falseResult: '/images/k6_hds01/HQTieucuc1.jpg',
    falseContent: 'Ôi không! Khi bạn "Like" hoặc "Share" bài viết này, bạn đã vô tình tiếp tay cho hành vi trêu chọc, giễu cợt, làm bạn Nam buồn và tổn thương. Điều này góp phần làm môi trường mạng kém an toàn, thiếu tôn trọng.',
  },
  {
    time: '9 tháng 5 lúc 10:00',
    content: 'Cả nhà ơi, lớp mình có bạn Lan Anh hoàn cảnh khó khăn lắm. Bố mẹ bạn ấy đau ốm thường xuyên nên việc học của bạn cũng bị ảnh hưởng. Lớp mình đang phát động quyên góp tập sách, dụng cụ học tập và học phí để giúp bạn có thể tiếp tục đến trường. Bạn nào có thể giúp đỡ dù chỉ một chút cũng quý lắm ạ!',
    image: '/images/k6_hds01/K6HDS01_Post4.jpg',
    privacy: 'public',
    blockList: [],
    name: 'Duy Anh',
    avatar: '/avatars/Avatar_DuyAnh.jpg',
    isTrue: true,
    trueResult: '/images/k6_hds01/KQTichcuc.jpg',
    trueContent: 'Chúc mừng bạn! Hành động "Like" và "Share" của bạn đã lan tỏa những thông điệp tích cực, khuyến khích bạn bè cùng làm việc tốt và xây dựng một cộng đồng mạng văn minh, nhân ái. Bạn đã góp phần tạo nên một không gian trực tuyến an toàn và bổ ích cho mọi người!',
  },
  {
    time: '9 tháng 5 lúc 10:00',
    content: 'Nghe phong phanh là bạn Hoài lớp 8A vừa chia tay người yêu cũ vì lén lút quen người khác đó! Chuyện này đúng hay không nhỉ? Có ai biết rõ hơn không? Kể nghe với!',
    image: '',
    privacy: 'public',
    blockList: [],
    name: 'Phương Linh',
    avatar: '/avatars/Avatar_PhuongLinh.jpg',
    isTrue: false,
    falseResult: '/images/k6_hds01/HQTieucuc2.jpg',
    falseContent: 'Cảnh báo! "Like" hoặc "Share" bài này có thể lan truyền tin đồn, khiến bạn Hoài bị hiểu lầm, xa lánh và ảnh hưởng đến danh dự. Điều này góp phần làm môi trường mạng kém an toàn, thiếu tôn trọng. Hãy xác minh thông tin trước khi chia sẻ để tránh gây hại.',
  },
  {
    time: '9 tháng 5 lúc 10:00',
    content: 'Mình cần tìm các bạn đang muốn cải thiện môn Toán để học nhóm chuẩn bị cho kỳ thi cuối năm. Nếu có ai muốn tham gia thì hãy liên hệ mình nhé!',
    image: '',
    privacy: 'public',
    blockList: [],
    name: 'Minh Khôi',
    avatar: '/avatars/Avatar_MinhKhoi.jpg',
    isTrue: true,
    trueResult: '/images/k6_hds01/KQTichcuc.jpg',
    trueContent: 'Chúc mừng bạn! Hành động "Like" và "Share" của bạn đã lan tỏa những thông điệp tích cực, khuyến khích bạn bè cùng làm việc tốt và xây dựng một cộng đồng mạng văn minh, nhân ái. Bạn đã góp phần tạo nên một không gian trực tuyến an toàn và bổ ích cho mọi người!',
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