import { inject, injectable } from 'inversify';
import { IObservable } from '../../generic/generic.observable';
import { MODULE } from '@/app/modules/app.registry';
import { GenericAction } from '@/app/@types/event/action/generic';
import { EVENT } from '@/app/modules/config/event';

@injectable()
export class NodeObservable implements IObservable {
  constructor(
    @inject(MODULE.EVENT.EMITER[2])
    protected readonly _events: EventEmitter2,
    @inject(MODULE.CONFIG.EVENT)
    protected readonly _EVENTS: typeof EVENT,
  ) {}

  listen(event: string, action: GenericAction) {
    this._events.on(event, action);
  }
  stopListening(event: string, action: GenericAction) {
    this._events.off(event, action);
  }
  emit(event: string, data: any) {
    this._events.emit(event, data);
  }

  get events() {
    return this._events;
  }

  get EVENTS() {
    return this._EVENTS;
  }
}
