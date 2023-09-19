export interface IObservable {
  listen(event: string): any | void;
  stopListening(event: string): any | void;
  emit(event: string, data: any): any | void;
}
