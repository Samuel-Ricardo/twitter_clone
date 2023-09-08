import { injectable } from 'inversify';
import { ILikeDTO } from '../DTO/like.dto';
import { LikeSchema } from '../validator/schema/like.schema';

@injectable()
export class Like {
  constructor(
    private readonly _id: string,
    private readonly _userId: string,
    private readonly _likedId: string,
    private readonly _createdAt: Date,
  ) {}

  static validate(data: ILikeDTO) {
    return LikeSchema.safeParse(data);
  }

  static create(data: ILikeDTO) {
    return new Like(data.id, data.userId, data.likedId, data.createdAt);
  }

  static createArray(data: ILikeDTO[]) {
    return data.map(Like.create);
  }

  toStruct(): ILikeDTO {
    return {
      id: this._id,
      userId: this._userId,
      likedId: this._likedId,
      createdAt: this._createdAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this._userId;
  }

  get likedId(): string {
    return this._likedId;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}
