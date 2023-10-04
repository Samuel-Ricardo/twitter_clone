import { useCallback } from 'react';
import { useCurrentUser } from '../../user/current.hook';
import { useAlreadyFollowing } from '../already_following.hook';
import { useFollow } from './follow.hook';
import { useUnfollow } from './unfollow.hook';

export const useToggleFollow = ({ followingId }: { followingId: string }) => {
  const { currentUser } = useCurrentUser();

  const { follow, followAsync } = useFollow();
  const { unfollow, unfollowAsync } = useUnfollow();

  const { alredyFollowing } = useAlreadyFollowing({
    followerId: currentUser?.id,
    followingId,
  });

  const toggle = useCallback(() => {
    const relationship = alredyFollowing();
    relationship
      ? unfollow({ id: relationship.id })
      : follow({
          followerId: currentUser?.id || '',
          followingId: followingId,
        });
  }, [alredyFollowing, currentUser?.id, follow, unfollow, followingId]);

  const toggleAsync = useCallback(() => {
    const follow = alredyFollowing();
    return follow
      ? unfollowAsync({ id: follow.id })
      : followAsync({
          followerId: currentUser?.id || '',
          followingId: followingId,
        });
  }, [
    alredyFollowing,
    currentUser?.id,
    followAsync,
    unfollowAsync,
    followingId,
  ]);

  return { toggle, toggleAsync, alredyFollowing };
};
