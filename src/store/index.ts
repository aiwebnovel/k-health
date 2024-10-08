import { create } from 'zustand';

export const useSelfTestKeyStore = create((set) => ({
  selfTestResultKey: '0',
  updateSelfTestResultKey: (newKey: string) =>
    set({ selfTestResultKey: newKey }),
}));
