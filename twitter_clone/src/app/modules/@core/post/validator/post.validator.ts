import {
  ICreatePostDTO,
  IPostDTO,
  Post,
  IDeletePostDTO,
  IUpdatePostDTO,
  IFindPostByIdDTO,
  IFindPostByAuthorIdDTO,
} from '..';

export interface IPostValidator {
  validateEntity(post: Post): boolean;
  validateData(post: IPostDTO): boolean;
  validateCreateDTO(DTO: ICreatePostDTO): boolean;
  validateUpdateDTO(DTO: IUpdatePostDTO): boolean;
  validateDeleteDTO(DTO: IDeletePostDTO): boolean;
  validateFindByIdDTO(DTO: IFindPostByIdDTO): boolean;
  validateFindByAuthorIdDTO(DTO: IFindPostByAuthorIdDTO): boolean;
}
