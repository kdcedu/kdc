import dayjs, { Dayjs } from "dayjs";

export const defaultProfile: IProfile = {
  email: 'binbeo123@gmail.com',
  password: 'binbeo123',
  fullName: 'Nguyễn Bin',
  gender: 'Nam',
  birth: dayjs("06/09/2010", "DD/MM/YYYY")
}

export interface IProfile {
  email: string;
  password: string;
  fullName: string;
  gender: string;
  birth: Dayjs;
  avatar?: string;
}

export const friendList = [
  {
    name: 'Minh An',
    avatar: '/avatars/girl_1.svg'
  },
  {
    name: 'Ngọc Chi',
    avatar: '/avatars/girl_2.svg'
  },
  {
    name: 'Thu Trang',
    avatar: '/avatars/girl_3.svg'
  },
]