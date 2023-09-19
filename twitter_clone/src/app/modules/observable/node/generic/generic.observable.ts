import { inject, injectable } from 'inversify';
import { IObservable } from '../../generic/generic.observable';
import { MODULE } from '@/app/modules/app.registry';
import { GenericAction } from '@/app/@types/event/action/generic';

@injectable()
export class NodeObservable implements IObservable {
  constructor(
    @inject(MODULE.EVENT.EMITER[2])
    protected readonly event: EventEmitter2,
  ) {}
  listen(event: string, action: GenericAction) {
    this.event.on(event, action);
  }
  stopListening(event: string, action: GenericAction) {
    this.event.off(event, action);
  }
  emit(event: string, data: any) {
    throw new Error('Method not implemented.');
  }
}
