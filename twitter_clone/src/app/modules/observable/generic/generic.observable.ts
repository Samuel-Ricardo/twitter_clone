import { GenericAction } from '@/app/@types/event/action/generic';

export interface IObservable {
  listen(event: string, action: GenericAction): any | void;
  stopListening(event: string, action?: GenericAction): any | void;
  emit(event: string, data: any): any | void;
}
