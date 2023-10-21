import { IUserGateway } from '@/app/modules/@core/user/gateway/user.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';
import {
  ICreateUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
  IUpdateUserDTO,
  IUserDTO,
} from '@/app/modules/@core/user/DTO';
import { User } from '@/app/modules/@core/user/entity/user.entity';
import { ISelectUserByCredentialsDTO } from '@/app/modules/@core/user/DTO/select_by_credentials.dto';
import { ISelectUserByEmailDTO } from '@/app/modules/@core/user/DTO/select_by_email.dto';
import { EncryptUserDataPolicy } from '@/app/modules/@core/user/policy/security/encrypt/data.policy';
import { DecryptUserDataPolicy } from '@/app/modules/@core/user/policy/security/decrypt/data.policy';
import { IEncriptedIv } from '@/app/@types/security/cryptographer/encriptedIv';

@injectable()
export class AxiosUserGateway extends AxiosHTTPGateway implements IUserGateway {
  readonly prefix = 'users';

  //  @userInject(MODULE.USER.POLICY.ENCRYPT.DATA)
  protected readonly _encryptUser: EncryptUserDataPolicy;
  //  @userInject(MODULE.USER.POLICY.DECRYPT.DATA)
  protected readonly _decryptUser: DecryptUserDataPolicy;

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }

  async create(user: ICreateUserDTO) {
    const response = await this.post<{ user: IUserDTO }>(this.prefix, user);
    return User.create(response.data.user);
  }

  async _create(user: ICreateUserDTO) {
    //    const encrypt = this.POLICY.SECURITY.ENCRYPT.CREATE.execute(user);
    const response = await this.post<{ user: IEncriptedIv }>(this.prefix, user);
    const result = this.POLICY.SECURITY.DECRYPT.USER.execute(
      response.data.user,
    );

    return User.create(result);
  }

  async listAll() {
    const response = await this.get<{ users: IUserDTO[] }>(this.prefix);
    return User.createArray(response.data.users);
  }

  async selectById(data: ISelectUserByIdDTO) {
    const response = await this.get<{ user: IUserDTO }>(
      `${this.prefix}/${data.id}`,
    );
    return User.create(response.data.user);
  }

  async selectByCredentials(data: ISelectUserByCredentialsDTO) {
    const response = await this.post<{ user?: IUserDTO; error?: string }>(
      `${this.prefix}/by/credentials`,
      data,
    );

    const result = response.data;

    if (result.error) {
      throw Error(result.error);
    }

    return result.user ? User.create(result.user!) : null;
  }

  async selectByEmail(data: ISelectUserByEmailDTO) {
    const response = await this.get<{ user: IUserDTO }>(
      `${this.prefix}/email/${data.email}`,
    );

    return User.create(response.data.user);
  }

  async update(data: IUpdateUserDTO) {
    const response = await this.patch<{ user: IUserDTO }>(this.prefix, data);
    return User.create(response.data.user);
  }

  async deleteUser(data: IDeleteuserDTO) {
    await this.delete(`${this.prefix}/${data.id}`);
  }

  swrListAll() {
    return this.useSWR<{ users: IUserDTO[] }>(this.fullURL, this.fetcher);
  }

  swrSelectById(data: ISelectUserByIdDTO) {
    return this.useSWR<{ user: IUserDTO }>(
      data.id ? `${this.fullURL}/${data.id}` : null,
      this.fetcher,
    );
  }

  swrSelectByEmail(data: ISelectUserByEmailDTO) {
    return this.useSWR<{ user: IUserDTO }>(
      data.email ? `${this.fullURL}/email/${data.email}` : null,
      this.fetcher,
    );
  }

  get POLICY() {
    return {
      SECURITY: {
        ENCRYPT: {
          USER: this._encryptUser,
        },
        DECRYPT: {
          USER: this._decryptUser,
        },
      },
    };
  }
}
