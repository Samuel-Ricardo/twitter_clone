import { User } from '../entity/user.entity';
import { ICreateUserDTO } from '../DTO/create.dto';

export interface IUserValidator {
  validateEntity(user: User): boolean;
  validateDTO<T>(dto: T, schema: any): boolean;
  validateCreateDTO(dto: ICreateUserDTO): boolean;
}
