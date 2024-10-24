import { User } from '@firebase/auth';

export type SelfTestResultTypes = {
  selfTestResultKey: string;
  updateSelfTestResultKey: (newKey: string) => void;
};

export type MyProfileResultTypes = {
  myProfile: User | null;
  updateMyProfile: (profile: User | null) => void;
};

export type CurrentLanguageTypes = {
  currentLanguage: 'English' | '한국어';
  updateCurrentLanguage: (lng: 'English' | '한국어') => void;
};

export type LinkBoardTypes = {
  id: number;
  title: string;
  image: string;
  link: string;
  linkPath: string;
  createdAt: string;
  updatedAt: string;
};

export type PostBoardTypes = {
  id: number;
  title: string;
  content: string;
  postPath: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};
