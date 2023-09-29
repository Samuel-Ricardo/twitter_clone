import { useFollowers } from '@/app/hooks/follow/followers.hook';
import { useFollowing } from '@/app/hooks/follow/following.hook';
import { useUsers } from '@/app/hooks/user/all.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { IUserDTO } from '@/app/modules/@core/user/DTO';
import { compareDesc } from 'date-fns';
import { useCallback, useMemo } from 'react';
import { FollowBarContainer } from './container.component';
import { FollowBarItem } from './item.component';

export const FollowBar = () => {
  const { data = { users: [] } } = useUsers();
  const {
    result: { data: auth },
  } = useCurrentUser();
  const { data: following } = useFollowing({
    followerId: auth?.user?.id || '',
  });
  const { data: followers } = useFollowers({
    followingId: auth?.user?.id || '',
  });

  const logged = useMemo(() => auth?.user, [auth]);

  console.log({ following, followers });

  const removeLogged = useCallback(
    (user: IUserDTO) => user.id !== logged?.id,
    [logged],
  );

  const removeRelatedUsers = useCallback(
    (user: IUserDTO) =>
      !(user.id in following?.map((follow) => follow.followingId)!) ||
      !(user.id in followers?.map((follow) => follow.followerId)!),
    [followers, following],
  );

  const orderByMoreActive = useCallback(
    (current: IUserDTO, next: IUserDTO) =>
      compareDesc(current.updatedAt, next.updatedAt),
    [],
  );

  const users = useMemo(
    () =>
      data.users
        .filter(removeLogged)
        .filter(removeRelatedUsers)
        .sort(orderByMoreActive),
    [data, removeLogged, removeRelatedUsers, orderByMoreActive],
  );

  if (users.length === 0) return null;

  return (
    <FollowBarContainer>
      <h2> Meet new users 🌱 </h2>
      <div className="flex flex-col gap-6 mt-4">
        {users?.map((user) => <FollowBarItem key={user.id} user={user} />)}
      </div>
    </FollowBarContainer>
  );
};
