import { create } from 'zustand';
import { SelfTestResultTypes } from '../types/index.ts';

export const useSelfTestKeyStore = create<SelfTestResultTypes>((set) => ({
  selfTestResultKey: '0',
  updateSelfTestResultKey: (newKey) => set({ selfTestResultKey: newKey }),
}));
