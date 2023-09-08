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
}
