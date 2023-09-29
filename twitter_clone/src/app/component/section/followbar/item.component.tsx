import { IUserDTO } from '@/app/modules/@core/user/DTO';
import { Avatar } from '../../user/avatar.component';

export const FollowBarItem = ({ user }: { user: IUserDTO }) => {
  return (
    <div className="flex flex-row gap-4">
      <Avatar image={user.profileImage} userId={user.id} />
      <div className="flex flex-col">
        <p className="">{user.name}</p>
        <p className="text-neutral-400 text-sm">@{user.username}</p>
      </div>
    </div>
  );
};
