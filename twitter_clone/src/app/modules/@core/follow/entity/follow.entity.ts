import { injectable } from 'inversify';

@injectable()
export class Follow {
  constructor(
    private _id: string,
    private _followerId: string,
    private _followingId: string,
    private _createdAt: Date,
  ) {}
}
