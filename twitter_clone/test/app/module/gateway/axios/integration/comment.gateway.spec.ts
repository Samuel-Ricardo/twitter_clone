/*
 * @jest-environment node
 */

import { MODULES } from '@/app/modules';
import { Comment } from '@/app/modules/@core/comment/entity';
import { ICommentGateway } from '@/app/modules/@core/comment/gateway';
import { User } from '@/app/modules/@core/user/entity/user.entity';
import { AxiosCommentGateway } from '@/app/modules/gateway/axios/comment/comment.gateway';
import { expect } from '@jest/globals';
import 'reflect-metadata';

describe('[GATEWAY] | AXIOS =:> [COMMENT]', () => {
  let gateway: ICommentGateway;
  let user: User;

  beforeAll(() => {
    gateway = MODULES.GATEWAY.AXIOS.COMMENT();

    expect(gateway).toBeInstanceOf(AxiosCommentGateway);
  });

  beforeEach(async () => {
    user = (await MODULES.GATEWAY.AXIOS.USER().listAll())[0];
  });

  it('[INTEGRATION] | Should: find by [AUTHOR] => [COMMENT]', async () => {
    const result = await gateway.findByauthor({ authorId: user.id });

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThanOrEqual(0);

    if (result.length > 0) {
      expect(result[0]).toBeInstanceOf(Comment);
      expect(result[0].id).toBeDefined();
    }
  });
});
