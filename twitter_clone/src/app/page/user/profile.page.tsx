'use client';

import { Header } from '@/app/component/header.component';
import { UserFeed } from '@/app/component/post/user/feed.component';
import { ProfileBio } from '@/app/component/user/bio.component';
import { ProfileCover } from '@/app/component/user/cover.component';
import { useUser } from '@/app/hooks/user/one.hook';
import { useParams } from 'next/navigation';

export const ProfilePage = () => {
  const { id } = useParams();
  const { user } = useUser({ id: id as string });

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col mb-14">
        <Header label="Profile" />
        <ProfileCover
          userId={id as string}
          cover={user?.coverImage}
          avatar={user?.profileImage}
        />
        <ProfileBio user={user} />
      </div>
      <UserFeed userId={id as string} />
    </div>
  );
};
