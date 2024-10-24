import { create } from 'zustand';
import {
  CurrentLanguageTypes,
  MyProfileResultTypes,
  SelfTestResultTypes,
} from '../types/index.ts';

export const useSelfTestKeyStore = create<SelfTestResultTypes>((set) => ({
  selfTestResultKey: '0',
  updateSelfTestResultKey: (newKey) => set({ selfTestResultKey: newKey }),
}));

export const myProfileStore = create<MyProfileResultTypes>((set) => ({
  myProfile: null,
  updateMyProfile: (profile) => set({ myProfile: profile }),
}));

export const currentLanguageStore = create<CurrentLanguageTypes>((set) => ({
  currentLanguage:
    localStorage.getItem('khealth_language') === 'en' ? 'English' : '한국어',
  updateCurrentLanguage: (lng) => set({ currentLanguage: lng }),
}));
