import { MODULES } from '@/app/modules';
import { ISelectUserByIdDTO } from '@/app/modules/@core/user/DTO';

export const useUser = (data: ISelectUserByIdDTO) =>
  MODULES.USER.MAIN().selectById(data);
