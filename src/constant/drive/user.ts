export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export type SharePermission = "viewer" | "editor" | "commenter";

export interface SharedUser {
  user: User;
  permission: SharePermission;
}
export const dummySharedUsers: SharedUser[] = [
  {
    user: {
      name: "Phạm Minh Khoa",
      email: "minhkhoa123@gmail.com",
      avatar: "/avatars/boy_2.svg",
    },
    permission: "viewer",
  },
  {
    user: {
      name: "Nguyễn Văn Tèo",
      email: "teonguyen@gmail.com",
      avatar: "/avatars/boy_1.svg",
    },
    permission: "editor",
  },
  {
    user: {
      name: "Lê Thị Hồng",
      email: "hongle.98@gmail.com",
      avatar: "/avatars/girl_1.svg",
    },
    permission: "commenter",
  },
  {
    user: {
      name: "Trần Đăng Khoa",
      email: "dangkhoa2025@zoho.com",
      avatar: "/avatars/animal_1.svg",
    },
    permission: "viewer",
  },
  {
    user: {
      name: "Vũ Thị Lan",
      email: "lanvuth@gmail.com",
      avatar: "/avatars/animal_2.svg",
    },
    permission: "editor",
  },
];
export const dummySuggestions: User[] = [
  {
    name: "Phạm Minh Khoa",
    email: "minhkhoa123@gmail.com",
    avatar: "/avatars/boy_2.svg",
  },
  {
    name: "Nguyễn Văn Tèo",
    email: "teonguyen@gmail.com",
    avatar: "/avatars/boy_1.svg",
  },
  {
    name: "Lê Thị Hồng",
    email: "hongle.98@gmail.com",
    avatar: "/avatars/girl_1.svg",
  },
  {
    name: "Trần Đăng Khoa",
    email: "dangkhoa2025@zoho.com",
    avatar: "/avatars/animal_1.svg",
  },
  {
    name: "Vũ Thị Lan",
    email: "lanvuth@gmail.com",
    avatar: "/avatars/animal_2.svg",
  },
];
