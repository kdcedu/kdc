export type ContentType = "Video" | "Audio" | "Image";

export interface Content {
  url: string;
  title: string;
  id: string;
  isGood: boolean;
  source: string;
  type: ContentType;
}

export const contents: Content[] = [
  {
    url: "/images/k1_hds02/badGame.jpg",
    title: "Hình ảnh 1",
    id: "1",
    isGood: false,
    source: "Hình ảnh được lấy từ trò chơi GTA5",
    type: "Image",
  },
  {
    url: "https://cdn.eva.vn/upload/4-2017/videoclip/2017-12-09/1512812910-nusinh_bidanh.mp4",
    title: "Video 1",
    id: "3",
    isGood: false,
    source: "Video được lấy từ Báo Người Lao Động",
    type: "Video",
  },
  {
    url: "/audios/bansacnuocnam.m4a",
    title: "Đoạn âm thanh 1",
    id: "6",
    isGood: true,
    source: "BẢN SẮC NƯỚC NAM | TUẤN CRY x MINH NGỌC | BẮC BLING version Liên Quân",
    type: "Audio",
  },
  {
    url: "/images/k1_hds02/goodGame.jpg",
    title: "Hình ảnh 2",
    id: "2",
    isGood: true,
    source: "Hình ảnh được lấy từ trò chơi Stardew Valley",
    type: "Image",
  },
  {
    url: "https://www.youtube.com/embed/_nbVTUYVKxg?si=chfPkBis86JD30-h",
    title: "Video 2",
    id: "4",
    isGood: true,
    source: "",
    type: "Video",
  },

  {
    url: "/audios/chuinhau.m4a",
    title: "Đoạn âm thanh 2",
    id: "5",
    isGood: false,
    source: "Chửi tiểu tam phải chửi như chị Mến mới đã (P1) - Mến Gái Miền Tây | Võ Đăng Khoa Official",
    type: "Audio",
  },
];
