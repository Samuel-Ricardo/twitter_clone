import { useCallback } from 'react';
import { useFollowers } from './followers.hook';

export const useAlreadyFollowing = ({
  followerId,
  followingId,
}: {
  followerId?: string;
  followingId?: string;
}) => {
  const { followers } = useFollowers({ followingId: followingId || '' });

  const alredyFollowing = useCallback(() => {
    if (!followers || !followerId) return undefined;

    return followers.some((follower) => follower.id === followerId);
  }, [followers, followerId]);

  return { alredyFollowing };
};
