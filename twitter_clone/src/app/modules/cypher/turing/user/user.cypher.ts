import { ICreateUserDTO, IUserDTO } from '@/app/modules/@core/user/DTO';
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

  get turing() {
    return this._turing;
  }
}
