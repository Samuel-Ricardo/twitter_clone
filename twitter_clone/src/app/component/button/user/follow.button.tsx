import { useToggleFollow } from '@/app/hooks/follow/mutate/toggle.hook';
import { FiUserCheck, FiUserX } from 'react-icons/fi';

export const FollowButton = ({ userId }: { userId: string }) => {
  const { toggleAsync, alredyFollowing } = useToggleFollow({
    followingId: userId,
  });
  return (
    <div>
      {alredyFollowing() ? (
        <FiUserX
          size={38}
          className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:text-cyan-300"
          onClick={toggleAsync}
        />
      ) : (
        <FiUserCheck
          size={38}
          className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:text-cyan-300"
          onClick={toggleAsync}
        />
      )}
    </div>
  );
};
