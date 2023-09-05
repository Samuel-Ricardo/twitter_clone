import { IError } from '@/app/@types/error/generic';

export class AppError extends Error implements IError {
  constructor(
    public message: string,
    public status: number = 500,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message);
  }

  toStruct(): IError {
    return {
      message: this.message,
      status: this.status,
      data: this.data,
      error: this.error,
    };
  }

  fromStruct(struct: IError): AppError {
    return new AppError(
      struct.message,
      struct.status,
      struct.data,
      struct.error,
    );
  }
}
