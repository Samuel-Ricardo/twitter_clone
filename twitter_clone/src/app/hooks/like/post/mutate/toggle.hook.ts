import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { useCallback } from 'react';
import { useLike } from './create.hook';
import { useDislike } from './delete.hook';
import { useHasLiked } from '../../has_liked.hook';
import { useTweetLikes } from '../../post.hook';

export const useToggleLike = ({ likedId }: { likedId: string }) => {
  const { currentUser } = useCurrentUser();

  const { giveLike } = useLike();
  const { dislike } = useDislike();

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

  return { toggle, hasLiked };
};
