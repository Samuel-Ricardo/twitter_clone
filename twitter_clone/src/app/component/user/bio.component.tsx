import { IProfileBIoProps } from '@/app/@types/props/user/bio';
import { BioContainer } from './bio/container.component';
import { EditUserButton } from '../button/user/edit.button';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { FollowButton } from '../button/user/follow.button';
import { BioContentContainer } from './bio/content.container';
import { BioData } from './bio/data.component';
import { BioBody } from './bio/body.component';
import { useMemo } from 'react';
import { format } from 'date-fns';
import { BioFollowers } from './bio/followers.component';

export const ProfileBio = ({ user }: IProfileBIoProps) => {
  const { currentUser } = useCurrentUser({ displayLogin: true });

  const createdAt = useMemo(
    () => (user ? format(new Date(user.createdAt), 'MMMM yyyy') : ''),
    [user],
  );

  return (
    <BioContainer>
      <div className="flex justify-end">
        {currentUser?.id === user?.id ? (
          <EditUserButton />
        ) : (
          <FollowButton userId={user?.id || ''} />
        )}
      </div>
      <BioContentContainer>
        <BioData user={user?.name || ''} username={user?.username || ''} />
        <BioBody bio={user?.bio || ''} createdAt={createdAt} />
        <BioFollowers userId={user?.id || ''} />
      </BioContentContainer>
    </BioContainer>
  );
};
