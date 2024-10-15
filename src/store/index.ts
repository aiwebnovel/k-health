import { create } from 'zustand';
import { MyProfileResultTypes, SelfTestResultTypes } from '../types/index.ts';
import { User } from '@firebase/auth';

export const useSelfTestKeyStore = create<SelfTestResultTypes>((set) => ({
  selfTestResultKey: '0',
  updateSelfTestResultKey: (newKey) => set({ selfTestResultKey: newKey }),
}));

export const myProfileStore = create<MyProfileResultTypes>((set) => ({
  myProfile: null,
  updateMyProfile: (profile) => set({ myProfile: profile }),
}));
