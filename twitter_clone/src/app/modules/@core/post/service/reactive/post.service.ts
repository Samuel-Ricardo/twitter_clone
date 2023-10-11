import { inject, injectable } from 'inversify';
import { IEmitPostDTO } from '../../DTO/observable/emit/created.dto';
import { EmitPostUseCase } from '../../use-case/observable/emit/created.use-case';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export class ReactivePostService {
  constructor(
    @inject(MODULE.POST.USE_CASE.OBSERVABLE.EMIT.CREATED)
    private readonly emitPostEvent: EmitPostUseCase,
    @inject(MODULE.POST.USE_CASE.OBSERVABLE.LISTEN.CREATED)
    private readonly listenPostEvent: EmitPostUseCase,
  ) {}
}
