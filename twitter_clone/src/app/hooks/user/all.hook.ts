import { MODULES } from '@/app/modules';

export const useUsers = () => MODULES.USER.MAIN().listAll().users;
