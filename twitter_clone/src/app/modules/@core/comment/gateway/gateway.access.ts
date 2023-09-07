import { inject, injectable } from 'inversify';
import { type ICommentGateway } from './comment.gateway';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export abstract class CommentGatewayAccess {
  constructor(
    @inject(MODULE.GATEWAY.AXIOS.COMMENT)
    protected readonly gateway: ICommentGateway,
  ) {}
}
