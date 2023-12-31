import { useCountFollowers } from '@/app/hooks/follow/count/followers.hook';
import { useCountFollowing } from '@/app/hooks/follow/count/following.hook';
import { FaUsersBetweenLines, FaUsersViewfinder } from 'react-icons/fa6';

export const BioFollowers = ({ userId }: { userId: string }) => {
  const { followers } = useCountFollowers({ followingId: userId });
  const { following } = useCountFollowing({ followerId: userId });

  return (
    <div className="flex flex-row items-center mt-4 gap-6">
      <div className="flex flex-row items-center gap-1">
        <FaUsersViewfinder size={34} />
        <p className="ml-2">Followers</p>
        <p>{followers}</p>
      </div>
      <div className="flex flex-row items-center gap-1">
        <FaUsersBetweenLines size={34} />
        <p className="ml-2">Following</p>
        <p>{following}</p>
      </div>
    </div>
  );
};
