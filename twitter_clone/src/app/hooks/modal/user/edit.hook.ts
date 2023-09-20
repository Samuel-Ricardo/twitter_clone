import { IUserEditModalState } from '@/app/@types/state/modal/user/edit';
import { create } from 'zustand';

export const useEditUserModal = create<IUserEditModalState>((set) => ({
  isOpen: false,
  Open: () => set({ isOpen: true }),
  Close: () => set({ isOpen: false }),
}));
