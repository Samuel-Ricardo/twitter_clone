import { IPostItemFooterProps } from '@/app/@types/props/post/item_footer';
import { useHasLiked } from '@/app/hooks/like/has_liked.hook';
import { useTweetLikes } from '@/app/hooks/like/post.hook';
import { useLike } from '@/app/hooks/like/post/mutate/create.hook';
import { useDislike } from '@/app/hooks/like/post/mutate/delete.hook';
import { useCallback, useMemo } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

export const PostItemFooter = ({
  postId,
  currentUserId,
  onLikeClick,
}: IPostItemFooterProps) => {
  const { data: fetchLikes, mutate: syncLikes } = useTweetLikes({
    likedId: postId,
  });
  const likes = useMemo(() => fetchLikes?.likes, [fetchLikes]);
  const { giveLike } = useLike();
  const { dislike } = useDislike();

  const { hasLiked } = useHasLiked({
    likedId: postId,
    userId: currentUserId,
  });

  const toggleLike = useCallback(() => {
    if (!currentUserId) return;

    hasLiked()
      ? dislike({
          id: likes?.find((like) => like.likedId === postId)?.id || '',
        })
      : giveLike({ userId: currentUserId, likedId: postId });
  }, [hasLiked, dislike, giveLike, currentUserId, postId, likes]);

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
      <div className="flex flex-row items-center gap-2 cursor-pointer transition-all hover:scale-105 duration-300 ease-in-out hover:bg-blue-200 hover:rounded-full hover:p-2 ">
        <AiOutlineMessage size={28} />
        <p>0</p>
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
