import { injectable } from 'inversify';
import { IPostDTO } from '../DTO/post.dto';
import { PostSchema } from '../validator/schema/post.schema';

@injectable()
export class Post {
  constructor(
    private _id: string,
    private _body: string,
    private _authorId: string,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _image?: string | null,
  ) {
    Post.validate({
      id: _id,
      body: _body,
      authorId: _authorId,
      createdAt: _createdAt,
      updatedAt: _updatedAt,
      image: _image,
    });
  }

  static validate(post: IPostDTO) {
    return PostSchema.parse(post) as IPostDTO;
  }

  static create(post: IPostDTO) {
    return new Post(
      post.id,
      post.body,
      post.authorId,
      post.createdAt,
      post.updatedAt,
      post.image,
    );
  }

  static createArray(posts: IPostDTO[]) {
    return posts.map((post) => Post.create(post));
  }

  toStruct(): IPostDTO {
    return {
      id: this._id,
      body: this._body,
      authorId: this._authorId,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      image: this._image,
    };
  }

  get id() {
    return this._id;
  }

  get body() {
    return this._body;
  }

  get authorId() {
    return this._authorId;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get image() {
    return this._image;
  }
}
