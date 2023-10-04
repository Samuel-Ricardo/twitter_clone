import { useCountFollowers } from '@/app/hooks/follow/count/followers.hook';
import { useCountFollowing } from '@/app/hooks/follow/count/following.hook';
import { FaUsersBetweenLines, FaUsersViewfinder } from 'react-icons/fa6';

export const BioFollowers = ({ userId }: { userId: string }) => {
  const { followers } = useCountFollowers({ followingId: userId });
  const { following } = useCountFollowing({ followerId: userId });

  return (
    <div className="flex flex-row items-center mt-4 gap-6">
      <div className="flex flex-row items-center gap-1">
        <p>Followers</p>
        <p>{followers}</p>
        <FaUsersViewfinder size={34} />
      </div>
      <div className="flex flex-row items-center gap-1">
        <p>Following</p>
        <p>{following}</p>
        <FaUsersBetweenLines size={34} />
      </div>
    </div>
  );
};
