import { User } from '@/app/modules/@core/user/entity/user.entity';
import { IUserValidator } from '../../../@core/user/validator/user.validator';
import { injectable } from 'inversify';
import {
  UserSchema,
  CreateUserSchema,
  DeleteUserScheme,
  UpdateUserSchema,
  SelectUserByIdSchema,
} from '../../../@core/user/validator';
import { z } from 'zod';
import {
  ICreateUserDTO,
  IUserDTO,
  IUpdateUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
} from '@/app/modules/@core/user/DTO';

@injectable()
export class ZodUserValidator implements IUserValidator {
  validateEntity(user: User): boolean {
    return UserSchema.parse(user.toStruct()) ? true : false;
  }

  validateDTO<T>(DTO: T, schema: z.ZodAny): boolean {
    return schema.parse(DTO) ? true : false;
  }

  validateCreateDTO(DTO: ICreateUserDTO): boolean {
    return CreateUserSchema.parse(DTO) ? true : false;
  }

  validateUpdateDTO(DTO: IUpdateUserDTO) {
    return UpdateUserSchema.parse(DTO) ? true : false;
  }

  validateDeleteDTO(DTO: IDeleteuserDTO) {
    return DeleteUserScheme.parse(DTO) ? true : false;
  }

  validateSelectByIdDTO(DTO: ISelectUserByIdDTO) {
    return SelectUserByIdSchema.parse(DTO) ? true : false;
  }

  validateUserDTO(DTO: IUserDTO) {
    return UserSchema.parse(DTO) ? true : false;
  }
}
