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
import { EncryptUserDataPolicy } from '@/app/modules/@core/user/policy/security/encrypt/user.policy';
import { DecryptUserDataPolicy } from '@/app/modules/@core/user/policy/security/decrypt/user.policy';
import { injectUserPolicy } from '@/app/modules/@core/user/policy/policy.module';
import { MODULE } from '@/app/modules/app.registry';
import { EncryptCreateUserDataPolicy } from '@/app/modules/@core/user/policy/security/encrypt/create.policy';

@injectable()
export class AxiosUserGateway extends AxiosHTTPGateway implements IUserGateway {
  readonly prefix = 'users';

  @injectUserPolicy(MODULE.USER.POLICY.SECURITY.ENCRYPT.DATA)
  protected readonly _encryptUser: EncryptUserDataPolicy;
  @injectUserPolicy(MODULE.USER.POLICY.SECURITY.DECRYPT.DATA)
  protected readonly _decryptUser: DecryptUserDataPolicy;

  @injectUserPolicy(MODULE.USER.POLICY.SECURITY.ENCRYPT.CREATE)
  protected readonly _encryptCreate: EncryptCreateUserDataPolicy;

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }

  async create(user: ICreateUserDTO) {
    const response = await this.post<{ user: IUserDTO }>(this.prefix, user);
    return User.create(response.data.user);
  }

  async _create(user: ICreateUserDTO) {
    const response = await this.post<{ user: string }>(this.prefix, user);

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
          CREATE: this._encryptCreate,
        },
        DECRYPT: {
          USER: this._decryptUser,
        },
      },
    };
  }
}
