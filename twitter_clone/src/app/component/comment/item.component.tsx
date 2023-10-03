import { ICommentItemProps } from '@/app/@types/props/comment/item';
import { CommentItemContainer } from './item/container.component';
import { Avatar } from '../user/avatar.component';
import { useUser } from '@/app/hooks/user/one.hook';
import { CommentItemContent } from './item/content.component';
import { LikeButton } from '../button/like.component';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { DeleteCommentButton } from '../button/comment/delete.component';

export const CommentItem = ({ comment }: ICommentItemProps) => {
  const { user } = useUser({ id: comment?.authorId });
  const { currentUser } = useCurrentUser();

  return (
    <CommentItemContainer>
      <Avatar image={user?.profileImage} userId={user?.id} />
      <div className="flex flex-col flex-1 gap-2">
        <CommentItemContent
          author={user?.username || ''}
          body={comment?.body || ''}
          createdAt={comment?.createdAt}
        />
        <LikeButton likedId={comment?.id || ''} className="-ml-16" />
      </div>
      {currentUser?.id === comment?.authorId && (
        <DeleteCommentButton
          id={comment?.id || ''}
          tweet={comment?.postId || ''}
        />
      )}
    </CommentItemContainer>
  );
};
