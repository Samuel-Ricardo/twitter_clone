import { IUserRegisterModalState } from '@/app/@types/state/modal/user/register';
import { create } from 'zustand';

export const useUserRegisterModal = create<IUserRegisterModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
