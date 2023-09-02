import { SWRResponse } from 'swr';
import { ISelectUserByIdDTO, IUserDTO } from '../../DTO';

export interface ISWRSupport {
  swrListAll(): SWRResponse<IUserDTO[]>;
  swrSelectById(props: ISelectUserByIdDTO): SWRResponse<IUserDTO>;
}
