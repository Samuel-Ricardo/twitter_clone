import { injectable } from 'inversify';
import { IFollowDTO } from '../DTO';

@injectable()
export class Follow {
  constructor(
    private _id: string,
    private _followerId: string,
    private _followingId: string,
    private _createdAt: Date,
  ) {}

  static create(follow: IFollowDTO) {
    return new Follow(
      follow.id,
      follow.followerId,
      follow.followingId,
      follow.createdAt,
    );
  }

  static createArray(follows: IFollowDTO[]) {
    return follows.map(Follow.create);
  }
}
