import { injectable } from 'inversify';
import { ICommentDTO } from '../DTO';
import { commentSchema } from '../validator/schema';

@injectable()
export class Comment {
  constructor(
    private _id: string,
    private _body: string,
    private _authorId: string,
    private _postId: string,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {
    Comment.validate({
      id: this._id,
      body: this._body,
      authorId: this._authorId,
      postId: this._postId,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    });
  }

  static validate(comment: ICommentDTO) {
    return commentSchema.parse(comment);
  }

  static create(comment: ICommentDTO) {
    return new Comment(
      comment.id,
      comment.body,
      comment.authorId,
      comment.postId,
      comment.createdAt,
      comment.updatedAt,
    );
  }

  static createArray(comments: ICommentDTO[]) {
    return comments.map(Comment.create);
  }

  toStruct(): ICommentDTO {
    return {
      id: this._id,
      body: this._body,
      authorId: this._authorId,
      postId: this._postId,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }

  get id() {
    return this._id;
  }

  get body() {
    return this._body;
  }

  set body(data: string) {
    this._body = data;
  }

  get authorId() {
    return this._authorId;
  }

  get postId() {
    return this._postId;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}
