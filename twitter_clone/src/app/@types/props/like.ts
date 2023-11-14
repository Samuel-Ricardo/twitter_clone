export interface ILikeButtonProps {
  onClick?: (event: React.MouseEvent<any>) => void | any;
  onMouseLeave?: (event: React.MouseEvent<any>) => void | any;
  onMouseEnter?: (event: React.MouseEvent<any>) => void | any;
  likedId: string;
  isComment?: boolean;
  className?: string;
}
