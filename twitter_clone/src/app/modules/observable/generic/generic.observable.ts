export interface IObservable {
  listen(event: string, action: (...data: any) => any): any | void;
  stopListening(event: string): any | void;
  emit(event: string, data: any): any | void;
}
