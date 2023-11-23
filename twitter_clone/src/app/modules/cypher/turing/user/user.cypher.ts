import {
  ICreateUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
  IUpdateUserDTO,
  IUserDTO,
} from '@/app/modules/@core/user/DTO';
import { ISelectUserByCredentialsDTO } from '@/app/modules/@core/user/DTO/select_by_credentials.dto';
import { ISelectUserByEmailDTO } from '@/app/modules/@core/user/DTO/select_by_email.dto';
import { IUserCypher } from '@/app/modules/@core/user/cypher/user.cypher';
import { MODULE } from '@/app/modules/app.registry';
import { Turing } from '@/app/modules/security/cryptography/turing';
import { inject, injectable } from 'inversify';

@injectable()
export class TuringUserCypher implements IUserCypher {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    private readonly _turing: Turing,
  ) {}
  encryptIvUserList(users: IUserDTO[]): string {
    throw new Error('Method not implemented.');
  }
  decryptIvUserList(users: string): IUserDTO[] {
    throw new Error('Method not implemented.');
  }

  async hashPassword(password: string) {
    return await this.turing.hash(password);
  }

  async comparePassword(password: string, hash: string) {
    return await this.turing.compareHash(password, hash);
  }

  encryptIvCreateDTO(user: ICreateUserDTO) {
    return this.turing.encryptIv(JSON.stringify(user));
  }

  encryptIvUserId(id: string) {
    return this.turing.encryptIv(id);
  }

  decryptIvUserId(secret: string) {
    return this.turing.decryptIv(secret);
  }

  encryptIvUser(user: IUserDTO) {
    const converted = JSON.stringify(user);
    return this.turing.encryptIv(converted);
  }

  decryptIvUser(user: string) {
    const decrypted = this.turing.decryptIv(user);
    return JSON.parse(decrypted) as IUserDTO;
  }

  decryptIvCreateDTO(user: string): ICreateUserDTO {
    throw new Error('Method not implemented.');
  }
  enecryptIvUpdateDTO(user: IUpdateUserDTO): string {
    throw new Error('Method not implemented.');
  }
  decryptIvUpdateDTO(user: string): IUpdateUserDTO {
    throw new Error('Method not implemented.');
  }
  encryptIvDeleteDTO(user: IDeleteuserDTO): string {
    throw new Error('Method not implemented.');
  }
  decryptIvDeleteDTO(user: string): IDeleteuserDTO {
    throw new Error('Method not implemented.');
  }
  encryptIvSelectByIdDTO(user: ISelectUserByIdDTO): string {
    throw new Error('Method not implemented.');
  }
  decryptIvSelectByIdDTO(user: string): ISelectUserByIdDTO {
    throw new Error('Method not implemented.');
  }
  encryptIvSelectByEmailDTO(user: ISelectUserByEmailDTO): string {
    throw new Error('Method not implemented.');
  }
  decryptIvSelectByEmailDTO(user: string): ISelectUserByEmailDTO {
    throw new Error('Method not implemented.');
  }
  encryptIvSelectByCredentialsDTO(user: ISelectUserByCredentialsDTO): string {
    throw new Error('Method not implemented.');
  }
  decryptIvSelectByCredentialsDTO(user: string): ISelectUserByCredentialsDTO {
    throw new Error('Method not implemented.');
  }

  get turing() {
    return this._turing;
  }
}
