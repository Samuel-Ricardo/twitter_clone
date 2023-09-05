import { IPostDTO } from '../DTO/post.dto';
import { PostSchema } from '../validator/schema/post.schema';

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
}
