import { IUserRegisterModalState } from '@/app/@types/state/modal/user/register';
import { create } from 'zustand';

export const useUserRegisterModal = create<IUserRegisterModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
