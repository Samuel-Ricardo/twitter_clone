import { useCountFollowers } from '@/app/hooks/follow/count/followers.hook';
import { useFollowers } from '@/app/hooks/follow/followers.hook';
import { useToggleFollow } from '@/app/hooks/follow/mutate/toggle.hook';
import { useCallback } from 'react';
import { FiUserCheck, FiUserPlus } from 'react-icons/fi';

export const FollowButton = ({ userId }: { userId: string }) => {
  const { toggleAsync, alredyFollowing } = useToggleFollow({
    followingId: userId,
  });
  const { mutate: followersSync } = useFollowers({ followingId: userId });
  const { mutate: counterSync } = useCountFollowers({ followingId: userId });
  const sync = useCallback(() => {
    followersSync();
    counterSync();
  }, [followersSync, counterSync]);
  const toggle = useCallback(async () => {
    await toggleAsync();
    sync();
  }, [toggleAsync, sync]);

  return (
    <div>
      {alredyFollowing() ? (
        <FiUserCheck
          size={36}
          className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:text-cyan-300"
          onClick={toggle}
        />
      ) : (
        <FiUserPlus
          size={36}
          className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:text-cyan-300"
          onClick={toggle}
        />
      )}
    </div>
  );
};
