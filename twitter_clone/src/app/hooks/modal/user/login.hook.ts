import { IUserLoginModalState } from '@/app/@types/state/modal/user/login';
import { create } from 'zustand';

export const useLoginModal = create<IUserLoginModalState>((set) => {
  return {
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  };
});
