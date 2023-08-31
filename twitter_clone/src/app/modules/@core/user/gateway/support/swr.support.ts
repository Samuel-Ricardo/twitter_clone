import { SWRResponse } from 'swr';
import { ISelectUserByIdDTO, IUserDTO } from '../../DTO';

export interface ISWRSupport {
  swrListAll(): Promise<SWRResponse<IUserDTO[]>>;
  swrSelectById(props: ISelectUserByIdDTO): Promise<SWRResponse<IUserDTO>>;
}
