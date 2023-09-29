import { useCallback } from 'react';
import { useTweetLikes } from './post.hook';

export const useHasLiked = ({
  likedId,
  userId,
}: {
  likedId: string;
  userId?: string;
}) => {
  const { data } = useTweetLikes({ likedId });

  const hasLiked = useCallback(() => {
    if (!data?.likes || !userId) return undefined;

    const liked = data?.likes.filter((like) => like.userId === userId);

    return liked.length > 0;
  }, [data, userId]);

  return { hasLiked };
};
