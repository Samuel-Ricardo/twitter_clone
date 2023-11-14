export type GenericAction = (...data: any) => Promise<any | void> | any | void;
