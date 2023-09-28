import { SWRResponse } from 'swr';
import { ISelectUserByIdDTO, IUserDTO } from '../../DTO';
import { ISelectUserByEmailDTO } from '../../DTO/select_by_email.dto';

export interface ISWRSupport {
  swrListAll(): SWRResponse<{ users: IUserDTO[] }>;
  swrSelectById(props: ISelectUserByIdDTO): SWRResponse<{ user: IUserDTO }>;
  swrSelectByEmail(
    props: ISelectUserByEmailDTO,
  ): SWRResponse<{ user: IUserDTO }>;
}
