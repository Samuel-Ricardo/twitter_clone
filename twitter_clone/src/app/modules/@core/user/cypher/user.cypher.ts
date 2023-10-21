import { IEncriptedIv } from '@/app/@types/security/cryptographer/encriptedIv';
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

  encryptIvUserId(id: string): IEncriptedIv;
  decryptIvUserId(secret: IEncriptedIv): string;

  encryptIvUser(user: IUserDTO): IEncriptedIv;
  decryptIvUser(user: IEncriptedIv): IUserDTO;

  enecryptIvCreateDTO(user: ICreateUserDTO): IEncriptedIv;
  decryptIvCreateDTO(user: IEncriptedIv): ICreateUserDTO;

  enecryptIvUpdateDTO(user: IUpdateUserDTO): IEncriptedIv;
  decryptIvUpdateDTO(user: IEncriptedIv): IUpdateUserDTO;

  encryptIvDeleteDTO(user: IDeleteuserDTO): IEncriptedIv;
  decryptIvDeleteDTO(user: IEncriptedIv): IDeleteuserDTO;

  encryptIvSelectByIdDTO(user: ISelectUserByIdDTO): IEncriptedIv;
  decryptIvSelectByIdDTO(user: IEncriptedIv): ISelectUserByIdDTO;

  encryptIvSelectByEmailDTO(user: ISelectUserByEmailDTO): IEncriptedIv;
  decryptIvSelectByEmailDTO(user: IEncriptedIv): ISelectUserByEmailDTO;

  encryptIvSelectByCredentialsDTO(
    user: ISelectUserByCredentialsDTO,
  ): IEncriptedIv;
  decryptIvSelectByCredentialsDTO(
    user: IEncriptedIv,
  ): ISelectUserByCredentialsDTO;
}
