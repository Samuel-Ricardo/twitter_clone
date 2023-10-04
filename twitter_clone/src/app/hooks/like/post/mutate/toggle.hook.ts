import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { useCallback } from 'react';
import { useLike } from './create.hook';
import { useDislike } from './delete.hook';
import { useHasLiked } from '../../has_liked.hook';
import { useTweetLikes } from '../../post.hook';

export const useToggleLike = ({ likedId }: { likedId: string }) => {
  const { currentUser } = useCurrentUser();

  const { giveLike, giveLikeAsync } = useLike();
  const { dislike, dislikeAsync } = useDislike();

  const { hasLiked } = useHasLiked({
    likedId: likedId,
    userId: currentUser?.id,
  });

  const { likes } = useTweetLikes({ likedId: likedId });

  const toggle = useCallback(
    () =>
      hasLiked()
        ? dislike({
            id: likes?.find((like) => like.likedId === likedId)?.id || '',
          })
        : giveLike({ userId: currentUser?.id || '', likedId: likedId }),
    [currentUser?.id, dislike, giveLike, hasLiked, likes, likedId],
  );

  const toggleAsync = useCallback(
    () =>
      hasLiked()
        ? dislikeAsync({
            id: likes?.find((like) => like.likedId === likedId)?.id || '',
          })
        : giveLikeAsync({ userId: currentUser?.id || '', likedId: likedId }),
    [currentUser?.id, dislikeAsync, giveLikeAsync, hasLiked, likes, likedId],
  );

  return { toggle, toggleAsync, hasLiked };
};
