export interface IError {
  error: true | boolean;
  message: string;
  status: 500 | number;
  data?: any;
}
