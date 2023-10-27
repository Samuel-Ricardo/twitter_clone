import {
  ICreateUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
  IUpdateUserDTO,
  IUserDTO,
} from '../DTO';
import { ISelectUserByEmailDTO } from '../DTO/select_by_email.dto';
import { ISelectUserByCredentialsDTO } from '../DTO/select_by_credentials.dto';

export interface IUserCypher {
  hashPassword(password: string): string | Promise<string>;
  comparePassword(password: string, hash: string): string | Promise<boolean>;

  encryptIvUserId(id: string): string;
  decryptIvUserId(secret: string): string;

  encryptIvUser(user: IUserDTO): string;
  decryptIvUser(user: string): IUserDTO;

  encryptIvCreateDTO(user: ICreateUserDTO): string;
  decryptIvCreateDTO(user: string): ICreateUserDTO;

  enecryptIvUpdateDTO(user: IUpdateUserDTO): string;
  decryptIvUpdateDTO(user: string): IUpdateUserDTO;

  encryptIvDeleteDTO(user: IDeleteuserDTO): string;
  decryptIvDeleteDTO(user: string): IDeleteuserDTO;

  encryptIvSelectByIdDTO(user: ISelectUserByIdDTO): string;
  decryptIvSelectByIdDTO(user: string): ISelectUserByIdDTO;

  encryptIvSelectByEmailDTO(user: ISelectUserByEmailDTO): string;
  decryptIvSelectByEmailDTO(user: string): ISelectUserByEmailDTO;

  encryptIvSelectByCredentialsDTO(user: ISelectUserByCredentialsDTO): string;
  decryptIvSelectByCredentialsDTO(user: string): ISelectUserByCredentialsDTO;
}
