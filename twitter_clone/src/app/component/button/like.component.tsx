import { ILikeButtonProps } from '@/app/@types/props/like';
import { useTweetLikes } from '@/app/hooks/like/post.hook';
import { useToggleLike } from '@/app/hooks/like/post/mutate/toggle.hook';
import { useCallback } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export const LikeButton = ({
  likedId,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
}: ILikeButtonProps) => {
  const { likes, mutate } = useTweetLikes({ likedId });
  const { toggle, hasLiked } = useToggleLike({ likedId });

  const onLikeClick = useCallback(
    (event: React.MouseEvent) => {
      onClick ? onClick(event) : event.stopPropagation();
      toggle();
    },
    [toggle, onClick],
  );

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent) => {
      onMouseEnter ? onMouseEnter(event) : event.stopPropagation();
      //mutate();
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (event: React.MouseEvent) => {
      onMouseLeave ? onMouseLeave(event) : event.stopPropagation();
      mutate();
    },
    [onMouseLeave, mutate],
  );

  return (
    <div
      onClick={onLikeClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={
        'flex flex-row w-fit h-fit items-center gap-2 cursor-pointer transition-all hover:scale-105 duration-300 ease-in-out hover:bg-red-200 hover:rounded-full hover:p-2 hover:px-3 ' +
        className
      }
    >
      {hasLiked() ? (
        <AiFillHeart size={28} color="red" />
      ) : (
        <AiOutlineHeart size={28} />
      )}
      <p>{likes?.length || 0}</p>
    </div>
  );
};
