import { inject, injectable } from 'inversify';
import { IEmitPostDTO } from '../../DTO/observable/emit/created.dto';
import { EmitPostUseCase } from '../../use-case/observable/emit/created.use-case';
import { MODULE } from '@/app/modules/app.registry';
import { IListenPostDTO } from '../../DTO/observable/listen/created.dto';
import { ListenPostUseCase } from '../../use-case/observable/listen/created.use-case';

@injectable()
export class ReactivePostService {
  constructor(
    @inject(MODULE.POST.USE_CASE.OBSERVABLE.EMIT.CREATED)
    private readonly emitPostEvent: EmitPostUseCase,
    @inject(MODULE.POST.USE_CASE.OBSERVABLE.LISTEN.CREATED)
    private readonly listenPostEvent: ListenPostUseCase,
  ) {}

  async emitPost(post: IEmitPostDTO) {
    return await this.emitPostEvent.executeAsync(post);
  }

  async listenPost(schedule: IListenPostDTO) {
    return await this.listenPostEvent.executeAsync(schedule);
  }
}
