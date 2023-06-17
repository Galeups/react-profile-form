import { Sex } from './Sex';

export interface UserDto {
  nickname: string;
  name: string;
  sername: string;
  phone: string;
  email: string;
  sex: Sex;
  advantages: string[];
  radio: number;
  checkbox: number[];
  about: string;
}
