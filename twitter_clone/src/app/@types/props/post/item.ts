import { IPostDTO } from '@/app/modules/@core/post';
import { IUserDTO } from '@/app/modules/@core/user/DTO';

export interface IPostItemProps {
  post?: IPostDTO;
  currentUser?: IUserDTO;
  fitScreen?: boolean;
  onPostClick?: (event: React.MouseEvent<any>) => void | any;
  onLikeClick?: (event: React.MouseEvent<any>) => void | any;
}
