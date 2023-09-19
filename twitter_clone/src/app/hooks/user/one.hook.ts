import { MODULES } from '@/app/modules';
import { ISelectUserByIdDTO } from '@/app/modules/@core/user/DTO';

export const useUser = (user: ISelectUserByIdDTO) =>
  MODULES.USER.MAIN().selectById(user).user;
