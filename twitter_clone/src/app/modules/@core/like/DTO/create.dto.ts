export interface ICreateLikeDTO {
  userId: string;
  likedId: string;
  isComment?: boolean;
}
