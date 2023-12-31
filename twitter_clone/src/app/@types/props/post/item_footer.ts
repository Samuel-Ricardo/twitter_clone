export interface IPostItemFooterProps {
  onLikeClick?: (event: React.MouseEvent<any>) => void | any;
  onCommentClick?: (event: React.MouseEvent<any>) => void | any;
  postId: string;
  currentUserId?: string;
}
