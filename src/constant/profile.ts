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
    name: 'Nguyễn A',
    avatar: '/avatars/animal_14.svg'
  },
  {
    name: 'Nguyễn B',
    avatar: '/avatars/animal_15.svg'
  },
  {
    name: 'Nguyễn C',
    avatar: '/avatars/animal_13.svg'
  },
  {
    name: 'Nguyễn D',
    avatar: '/avatars/animal_12.svg'
  }
]