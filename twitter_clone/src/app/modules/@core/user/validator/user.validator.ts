import { User } from '../entity/user.entity';
import {
  ICreateUserDTO,
  ISelectUserByIdDTO,
  IDeleteuserDTO,
  IUserDTO,
  IUpdateUserDTO,
} from '../DTO';

export interface IUserValidator {
  validateEntity(user: User): boolean;
  validateUserDTO(dto: IUserDTO): boolean;
  validateDTO<T>(dto: T, schema: any): boolean;
  validateCreateDTO(dto: ICreateUserDTO): boolean;
  validateUpdateDTO(dto: IUpdateUserDTO): boolean;
  validateDeleteDTO(dto: IDeleteuserDTO): boolean;
  validateSelectByIdDTO(dto: ISelectUserByIdDTO): boolean;
}
