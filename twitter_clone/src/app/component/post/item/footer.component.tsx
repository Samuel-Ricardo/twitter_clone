import { IPostItemFooterProps } from '@/app/@types/props/post/item_footer';
import { useTweetComments } from '@/app/hooks/comment/post.hook';
import { useTweetLikes } from '@/app/hooks/like/post.hook';
import { useToggleLike } from '@/app/hooks/like/post/mutate/toggle.hook';
import { useCallback } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

export const PostItemFooter = ({
  postId,
  onLikeClick,
  onCommentClick,
}: IPostItemFooterProps) => {
  const { likes, mutate: syncLikes } = useTweetLikes({ likedId: postId });
  const { comments } = useTweetComments({ postId });

  const { toggle: toggleLike, hasLiked } = useToggleLike({ likedId: postId });

  const handleLike = useCallback(
    (event: React.MouseEvent<any>) => {
      event.stopPropagation();

      if (onLikeClick) onLikeClick(event);

      toggleLike();
    },
    [onLikeClick, toggleLike],
  );

  return (
    <div className="flex flex-row items-center mt-3 gap-10">
      <div
        onClick={onCommentClick}
        className="flex flex-row items-center gap-2 cursor-pointer transition-all hover:scale-105 duration-300 ease-in-out hover:bg-blue-200 hover:rounded-full hover:p-2 "
      >
        <AiOutlineMessage size={28} />
        <p>{comments.length}</p>
      </div>
      <div
        onClick={handleLike}
        onMouseLeave={syncLikes}
        className="flex flex-row items-center gap-2 cursor-pointer transition-all hover:scale-105 duration-300 ease-in-out hover:bg-red-200 hover:rounded-full hover:p-2 "
      >
        {hasLiked() ? (
          <AiFillHeart size={28} color="red" />
        ) : (
          <AiOutlineHeart size={28} />
        )}
        <p>{likes?.length || 0}</p>
      </div>
    </div>
  );
};
