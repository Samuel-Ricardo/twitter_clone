import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { useCallback, useMemo } from 'react';
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

  const likeId = useMemo(
    () =>
      likes?.find(
        (like) => like.likedId === likedId && like.userId === currentUser?.id,
      )?.id || '',
    [likes, likedId, currentUser?.id],
  );

  const toggle = useCallback(
    ({ isComment }: { isComment?: boolean }) =>
      hasLiked()
        ? dislike({ id: likeId })
        : giveLike({
            userId: currentUser?.id || '',
            likedId: likedId,
            isComment,
          }),
    [dislike, giveLike, hasLiked, likedId, likeId, currentUser?.id],
  );

  const toggleAsync = useCallback(
    ({ isComment }: { isComment?: boolean }) =>
      hasLiked()
        ? dislikeAsync({ id: likeId })
        : giveLikeAsync({
            userId: currentUser?.id || '',
            likedId: likedId,
            isComment,
          }),
    [currentUser?.id, dislikeAsync, giveLikeAsync, hasLiked, likeId, likedId],
  );

  return { toggle, toggleAsync, hasLiked };
};
